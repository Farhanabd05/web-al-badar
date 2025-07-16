// frontend/app/informasi-psb/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function InformasiPSBPage() {
  const psbYears = [
    {
      id: '2025-2026',
      title: 'PSB Tahun Ajaran 2025-2026',
      description: 'Pendaftaran santri baru untuk tahun ajaran 2025-2026 telah dibuka!',
      status: 'Dibuka',
      statusColor: 'bg-green-100 text-green-800',
      deadline: '31 Juli 2025',
      quota: '50 Santri',
      href: '/informasi-psb/2025-2026'
    },
    {
      id: '2024-2025',
      title: 'PSB Tahun Ajaran 2024-2025',
      description: 'Pendaftaran untuk tahun ajaran 2024-2025 telah ditutup.',
      status: 'Ditutup',
      statusColor: 'bg-red-100 text-red-800',
      deadline: '31 Juli 2024',
      quota: '45 Santri',
      href: '/informasi-psb/2024-2025'
    },
    {
      id: '2023-2024',
      title: 'PSB Tahun Ajaran 2023-2024',
      description: 'Pendaftaran untuk tahun ajaran 2023-2024 telah selesai.',
      status: 'Selesai',
      statusColor: 'bg-gray-100 text-gray-800',
      deadline: '31 Juli 2023',
      quota: '40 Santri',
      href: '/informasi-psb/2023-2024'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl shadow-xl mb-8">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">📚</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Informasi PSB</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Penerimaan Santri Baru Pondok Pesantren Al-Badar
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Selamat Datang Calon Santri!</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pondok Pesantren Al-Badar membuka kesempatan bagi putra-putri terbaik bangsa untuk bergabung 
            dalam program pendidikan Islam yang berkualitas. Kami menyediakan pendidikan yang menggabungkan 
            nilai-nilai agama dengan ilmu pengetahuan modern.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">📖</div>
              <h3 className="font-bold text-blue-800">Tahfidz Al-Qur'an</h3>
              <p className="text-sm text-blue-600">Program unggulan menghafal Al-Qur'an</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🏫</div>
              <h3 className="font-bold text-blue-800">Pendidikan Modern</h3>
              <p className="text-sm text-blue-600">Kurikulum terpadu dan berstandar</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-bold text-blue-800">Pembinaan Karakter</h3>
              <p className="text-sm text-blue-600">Membentuk generasi Qur'ani dan Rabbani</p>
            </div>
          </div>
        </div>

        {/* PSB Cards */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tahun Ajaran Tersedia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {psbYears.map((psb) => (
              <Link 
                key={psb.id} 
                href={psb.href}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${psb.statusColor}`}>
                        {psb.status}
                      </span>
                      <span className="text-2xl">🎓</span>
                    </div>
                    <h3 className="text-xl font-bold">{psb.title}</h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {psb.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <span className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                          📅
                        </span>
                        <span className="text-gray-600">Batas Akhir: </span>
                        <span className="font-medium text-gray-800 ml-1">{psb.deadline}</span>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <span className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          👥
                        </span>
                        <span className="text-gray-600">Kuota: </span>
                        <span className="font-medium text-gray-800 ml-1">{psb.quota}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-4 rounded-lg text-center font-medium group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-300">
                        {psb.status === 'Dibuka' ? 'Lihat Detail & Daftar' : 'Lihat Informasi'}
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Informasi Kontak</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Hubungi Kami:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">📲</span>
                  <div>
                    <p className="font-medium">08158710659</p>
                    <p className="text-sm text-gray-600">Ustadz. Achmad Junaedi</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">📲</span>
                  <div>
                    <p className="font-medium">08158134160</p>
                    <p className="text-sm text-gray-600">Ustadz. Akhmad Sadzali</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">📲</span>
                  <div>
                    <p className="font-medium">085776597598</p>
                    <p className="text-sm text-gray-600">Admin</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Lokasi Pesantren:</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Jl. Desa Pabuaran, RT. 002 RW. 005, Pabuaran, 
                  Kecamatan Sukamakmur, Kabupaten Bogor, 
                  Jawa Barat 16831
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
