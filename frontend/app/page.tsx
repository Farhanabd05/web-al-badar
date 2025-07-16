// frontend/app/page.tsx
import Image from 'next/image'

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 via-green-500 to-blue-600 text-white p-8 rounded-xl shadow-xl mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
              <Image 
                src="/logo-pesantren-removebg.png" 
                alt="Logo Pondok Pesantren Al Badar" 
                width={100} 
                height={100} 
                className="drop-shadow-lg"
              />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 drop-shadow-lg">
              Pondok Pesantren Al Badar
            </h1>
            <p className="text-center text-lg md:text-xl opacity-95 font-light">
              Pabuaran Sukamakmur Bogor
            </p>
          </div>
        </div>

        {/* Gallery Photos */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Galeri Kegiatan</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Foto Pertama - Ukuran Lebih Besar */}
            <div className="lg:col-span-2 group">
              <div className="relative bg-gradient-to-br from-green-400 to-blue-500 p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="bg-white p-4 rounded-xl">
                  <div className="overflow-hidden rounded-xl mb-4 relative">
                    <Image 
                      src="/foto-bersama-ust-jun.jpg" 
                      alt="Foto Para Santri Bersama Ustadz Achmad Junaedi" 
                      width={600} 
                      height={400} 
                      className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <h3 className="text-lg font-bold mb-1">Kegiatan Bersama</h3>
                      <p className="text-sm opacity-90">Santri bersama para ustadz</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700 font-medium text-sm">
                      Foto Para Santri Bersama Ustadz Achmad Junaedi
                    </p>
                    <span className="text-green-500 text-sm">📸</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Foto Kedua - Ukuran Lebih Kecil */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-blue-400 to-purple-500 p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="bg-white p-4 rounded-xl">
                  <div className="overflow-hidden rounded-xl mb-4 relative">
                    <Image 
                      src="/foto-bersama-ust-sadzali.jpg" 
                      alt="Foto Para Santri Bersama Ustadz Akhmad Sadzali" 
                      width={400} 
                      height={500} 
                      className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <h3 className="text-lg font-bold mb-1">Pembelajaran</h3>
                      <p className="text-sm opacity-90">Suasana belajar santri</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700 font-medium text-sm">
                      Foto Para Santri Bersama Ustadz Akhmad Sadzali
                    </p>
                    <span className="text-blue-500 text-sm">📸</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Pengenalan */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Video Pengenalan</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">Mengenal lebih dekat Pondok Pesantren Al Badar</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative bg-gradient-to-br from-blue-400 to-purple-500 p-1 rounded-2xl">
              <div className="bg-white p-4 rounded-xl">
                <div className="relative overflow-hidden rounded-xl">
                  <video 
                    className="w-full h-auto max-h-96 object-cover rounded-xl"
                    controls
                    preload="metadata"
                    poster="/logo-pesantren-removebg.png"
                  >
                    <source src="/video/pengenalan.mp4" type="video/mp4" />
                    <p className="text-gray-500 text-center p-4">
                      Browser Anda tidak mendukung video HTML5. 
                      <a href="/video/pengenalan.mp4" className="text-blue-600 underline">
                        Download video
                      </a>
                    </p>
                  </video>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Video Pengenalan Pesantren</h3>
                  <p className="text-gray-600">
                    Selamat datang di Pondok Pesantren Al Badar. Saksikan video pengenalan kami untuk mengetahui 
                    lebih lanjut tentang program, fasilitas, dan kegiatan di pesantren kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Unggulan */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 rounded-full p-3 mr-4">
              <span className="text-2xl">🌟</span>
            </div>
            <h2 className="font-bold text-2xl text-green-700">Program Unggulan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <span className="text-green-600 mr-3 text-xl">✅</span>
              <p className="text-gray-800 font-medium">Tahfidz Al Qur'an</p>
            </div>
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <span className="text-green-600 mr-3 text-xl">✅</span>
              <p className="text-gray-800 font-medium">Kitab Kuning</p>
            </div>
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <span className="text-green-600 mr-3 text-xl">✅</span>
              <p className="text-gray-800 font-medium">Bahasa Arab & Inggris</p>
            </div>
          </div>
        </div>

        {/* Motto */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 rounded-full p-3 mr-4">
              <span className="text-2xl">💫</span>
            </div>
            <h2 className="font-bold text-2xl text-blue-700">Motto</h2>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 text-lg italic text-center font-medium">
              "Mencetak generasi Qur'ani, Rabbani dan Madani..."
            </p>
          </div>
        </div>

        {/* Fasilitas */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 rounded-full p-3 mr-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h2 className="font-bold text-2xl text-indigo-700">Fasilitas Sekolah</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg text-center hover:bg-indigo-100 transition-colors duration-200">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-bold text-indigo-800">Asrama</h3>
              <p className="text-sm text-indigo-600 mt-1">Tempat tinggal santri</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center hover:bg-indigo-100 transition-colors duration-200">
              <div className="text-3xl mb-2">🏢</div>
              <h3 className="font-bold text-indigo-800">Kantor</h3>
              <p className="text-sm text-indigo-600 mt-1">Pusat administrasi</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center hover:bg-indigo-100 transition-colors duration-200">
              <div className="text-3xl mb-2">🕌</div>
              <h3 className="font-bold text-indigo-800">Mesjid</h3>
              <p className="text-sm text-indigo-600 mt-1">Tempat ibadah utama</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center hover:bg-indigo-100 transition-colors duration-200">
              <div className="text-3xl mb-2">🏫</div>
              <h3 className="font-bold text-indigo-800">Kelas</h3>
              <p className="text-sm text-indigo-600 mt-1">Ruang pembelajaran</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center hover:bg-indigo-100 transition-colors duration-200">
              <div className="text-3xl mb-2">📖</div>
              <h3 className="font-bold text-indigo-800">Rumah Tahfidz</h3>
              <p className="text-sm text-indigo-600 mt-1">Khusus menghafal Al-Qur'an</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center hover:bg-indigo-100 transition-colors duration-200">
              <div className="text-3xl mb-2">🍳</div>
              <h3 className="font-bold text-indigo-800">Dapur</h3>
              <p className="text-sm text-indigo-600 mt-1">Fasilitas makan santri</p>
            </div>
          </div>
        </div>

        {/* Kegiatan Ekstrakurikuler */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border-l-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-emerald-100 rounded-full p-3 mr-4">
              <span className="text-2xl">🎭</span>
            </div>
            <h2 className="font-bold text-2xl text-emerald-700">Kegiatan Ekstrakurikuler</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg hover:bg-emerald-100 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 rounded-full p-3 mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-bold text-emerald-800 text-lg">1. PRAMUKA</h3>
                  <p className="text-sm text-emerald-600">Pembentukan karakter dan kepemimpinan</p>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg hover:bg-emerald-100 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 rounded-full p-3 mr-4">
                  <span className="text-2xl">⚽</span>
                </div>
                <div>
                  <h3 className="font-bold text-emerald-800 text-lg">2. OLAHRAGA</h3>
                  <p className="text-sm text-emerald-600">Pembinaan fisik dan kesehatan</p>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg hover:bg-emerald-100 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 rounded-full p-3 mr-4">
                  <span className="text-2xl">🥁</span>
                </div>
                <div>
                  <h3 className="font-bold text-emerald-800 text-lg">3. HADRAH</h3>
                  <p className="text-sm text-emerald-600">Seni musik Islam tradisional</p>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg hover:bg-emerald-100 transition-colors duration-200">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 rounded-full p-3 mr-4">
                  <span className="text-2xl">🎵</span>
                </div>
                <div>
                  <h3 className="font-bold text-emerald-800 text-lg">4. QIROAH & TILAWAH</h3>
                  <p className="text-sm text-emerald-600">Seni baca Al-Qur'an</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        {/* Lokasi */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 rounded-full p-3 mr-4">
              <span className="text-2xl">📍</span>
            </div>
            <h2 className="font-bold text-2xl text-purple-700">Lokasi</h2>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="text-gray-700 text-lg leading-relaxed">
              Jl. Desa Pabuaran, RT. 002 RW. 005, Pabuaran, Kecamatan. Sukamakmur, Kabupaten. Bogor, Jawa Barat 16831
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 rounded-full p-3 mr-4">
              <span className="text-2xl">📞</span>
            </div>
            <h2 className="font-bold text-2xl text-orange-700">Contact Person</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-gray-700 font-medium">📲 08158710659</p>
              <p className="text-gray-600 text-sm">Ustadz. Achmad Junaedi</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-gray-700 font-medium">📲 08158134160</p>
              <p className="text-gray-600 text-sm">Ustadz. Akhmad Sadzali</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-gray-700 font-medium">📲 085776597598</p>
              <p className="text-gray-600 text-sm">Admin</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border-l-4 border-pink-500 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-pink-100 rounded-full p-3 mr-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h2 className="font-bold text-2xl text-pink-700">Follow us on social media!</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <p className="text-gray-700 font-medium">📢 Instagram</p>
              <p className="text-gray-600 text-sm">@pondokpesantrenalbadar</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <p className="text-gray-700 font-medium">📳 Facebook</p>
              <p className="text-gray-600 text-sm">@pondocpesantrenalbadar</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <p className="text-gray-700 font-medium">📲 Tiktok</p>
              <p className="text-gray-600 text-sm">@pondokpesantrenalbadar</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <p className="text-gray-700 font-medium">🎥 Youtube</p>
              <p className="text-gray-600 text-sm">@pondokpesantrenalbadar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}