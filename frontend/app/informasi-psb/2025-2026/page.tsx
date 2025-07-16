// frontend/app/informasi-psb/2025-2026/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function PSB20252026Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl shadow-xl mb-8">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">🎓</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">PSB Tahun Ajaran 2025-2026</h1>
            <p className="text-xl opacity-90">Penerimaan Santri Baru Pondok Pesantren Al-Badar</p>
            <div className="mt-4">
              <span className="bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm font-medium">
                ✅ Pendaftaran Dibuka
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Back */}
        <div className="mb-6">
          <Link 
            href="/informasi-psb" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <span className="mr-2">←</span>
            Kembali ke Informasi PSB
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Registration Information */}
          <div className="space-y-6">
            {/* Quick Registration */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                <span className="bg-green-100 rounded-full p-2 mr-3">📝</span>
                Daftar Sekarang
              </h2>
              
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-green-800 mb-2">Pendaftaran Online</h3>
                <p className="text-green-700 text-sm mb-4">
                  Daftar mudah dan cepat melalui formulir online kami
                </p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfckzf78qVjw2rPQKgTgeNA9T8rvku6WIfPUeijgAgCbI_dMQ/viewform?usp=header" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-6 rounded-lg font-medium hover:from-green-700 hover:to-green-600 transition-all duration-300 inline-flex items-center group"
                >
                  Daftar Online
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">🚀</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">📅</span>
                  <div>
                    <p className="font-medium">Batas Pendaftaran</p>
                    <p className="text-gray-600">31 Juli 2025</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">👥</span>
                  <div>
                    <p className="font-medium">Kuota Tersedia</p>
                    <p className="text-gray-600">50 Santri</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">💰</span>
                  <div>
                    <p className="font-medium">Biaya Pendaftaran</p>
                    <p className="text-gray-600">Rp 100.000</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🏫</span>
                  <div>
                    <p className="font-medium">Jenjang</p>
                    <p className="text-gray-600">SMP & SMA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
                <span className="bg-blue-100 rounded-full p-2 mr-3">📋</span>
                Persyaratan Pendaftaran
              </h2>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Dokumen yang Diperlukan:</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Fotokopi Ijazah/SKHUN yang telah dilegalisir
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Fotokopi Kartu Keluarga
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Fotokopi Akta Kelahiran
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Pas foto 3x4 sebanyak 6 lembar
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Surat keterangan sehat dari dokter
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Surat pernyataan orang tua
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">Syarat Usia:</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      SMP: Usia maksimal 15 tahun
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      SMA: Usia maksimal 18 tahun
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h2 className="text-2xl font-bold text-purple-700 mb-6 flex items-center">
                <span className="bg-purple-100 rounded-full p-2 mr-3">⏰</span>
                Timeline Pendaftaran
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-500 w-4 h-4 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800">1 Januari - 31 Juli 2025</h3>
                    <p className="text-gray-600 text-sm">Pendaftaran dibuka</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-500 w-4 h-4 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800">1 - 15 Agustus 2025</h3>
                    <p className="text-gray-600 text-sm">Tes seleksi dan wawancara</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 w-4 h-4 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800">20 Agustus 2025</h3>
                    <p className="text-gray-600 text-sm">Pengumuman hasil seleksi</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500 w-4 h-4 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-800">1 September 2025</h3>
                    <p className="text-gray-600 text-sm">Tahun ajaran baru dimulai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Poster and Additional Info */}
          <div className="space-y-6">
            {/* Poster */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Poster Pendaftaran</h2>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-xl text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Image 
                      src="/logo-pesantren-removebg.png" 
                      alt="Logo Pondok Pesantren Al Badar" 
                      width={100} 
                      height={100} 
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">PENDAFTARAN SANTRI BARU</h3>
                  <h4 className="text-xl font-bold text-blue-700 mb-4">TAHUN AJARAN 2025-2026</h4>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-medium">Pondok Pesantren Al-Badar</p>
                    <p className="text-sm">Pabuaran, Sukamakmur, Bogor</p>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <p className="text-lg font-bold text-red-600">DIBUKA!</p>
                      <p className="text-sm">Batas Akhir: 31 Juli 2025</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfckzf78qVjw2rPQKgTgeNA9T8rvku6WIfPUeijgAgCbI_dMQ/viewform?usp=header" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                >
                  Download Poster
                  <span className="ml-2">📥</span>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <h2 className="text-2xl font-bold text-orange-700 mb-6 flex items-center">
                <span className="bg-orange-100 rounded-full p-2 mr-3">📞</span>
                Kontak Pendaftaran
              </h2>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-orange-800 mb-3">Hubungi Kami:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-orange-600 mr-3">📲</span>
                      <div>
                        <p className="font-medium">08158710659</p>
                        <p className="text-sm text-gray-600">Ustadz. Achmad Junaedi</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-600 mr-3">📲</span>
                      <div>
                        <p className="font-medium">08158134160</p>
                        <p className="text-sm text-gray-600">Ustadz. Akhmad Sadzali</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-600 mr-3">📲</span>
                      <div>
                        <p className="font-medium">085776597598</p>
                        <p className="text-sm text-gray-600">Admin</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-orange-800 mb-2">Jam Pelayanan:</h3>
                  <p className="text-orange-700 text-sm">Senin - Jumat: 08.00 - 16.00 WIB</p>
                  <p className="text-orange-700 text-sm">Sabtu: 08.00 - 12.00 WIB</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl shadow-xl text-center">
              <h2 className="text-2xl font-bold mb-4">Bergabunglah dengan Kami!</h2>
              <p className="opacity-90 mb-6">
                Wujudkan impian menjadi hafiz Al-Qur'an dan berakhlak mulia di Pondok Pesantren Al-Badar
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfckzf78qVjw2rPQKgTgeNA9T8rvku6WIfPUeijgAgCbI_dMQ/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-green-600 py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
              >
                DAFTAR SEKARANG
                <span className="ml-2">✨</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
