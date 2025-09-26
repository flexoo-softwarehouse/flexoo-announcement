import { findDeveloperByNRP } from "@/lib/developers";
import { DataProtection } from "@/lib/security";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { nrp } = await request.json();

    // Validation
    if (!nrp || typeof nrp !== "string") {
      return NextResponse.json({ error: "NRP is required" }, { status: 400 });
    }

    // Rate limiting sederhana (dalam production gunakan Redis atau database)
    const _clientIP = request.headers.get("x-forwarded-for") || "unknown";

    // Cari developer
    const developer = findDeveloperByNRP(nrp.trim());

    if (developer) {
      // Jangan return data sensitif secara langsung
      return NextResponse.json({
        found: true,
        result: {
          namaDepan: developer.namaDepan,
          divisi: developer.divisi,
          posisi: developer.posisi,
          // Gunakan hash untuk validasi client-side
          hash: DataProtection.hashNRP(nrp),
        },
      });
    } else {
      return NextResponse.json({
        found: false,
        message: "Data tidak ditemukan",
      });
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// Tambahkan method GET untuk health check
export async function GET() {
  return NextResponse.json({ status: "API is working" });
}
