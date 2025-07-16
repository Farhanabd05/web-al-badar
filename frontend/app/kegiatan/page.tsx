// frontend/app/kegiatan/page.tsx
import Image from 'next/image'

export default function KegiatanPage() {
  const activities = [
    {
      id: 1,
      title: "Kegiatan Belajar Mengajar di Kelas",
      image: "/kegiatan/KBM-di-kelas.jpg",
      description: "Suasana pembelajaran di dalam kelas dengan metode pembelajaran interaktif yang menggabungkan pendidikan agama dan umum.",
      category: "Akademik"
    },
    {
      id: 2,
      title: "Halaqah dengan Kepala Sekolah",
      image: "/kegiatan/Halaqah-dengan-kepala-sekolah.jpg",
      description: "Kegiatan halaqah atau diskusi bersama kepala sekolah untuk membahas perkembangan santri dan pembinaan karakter.",
      category: "Pembinaan"
    },
    {
      id: 3,
      title: "Pelatihan Ruqyah Syari'yyah",
      image: "/kegiatan/Pelatihan-Ruqyah-Syari'yyah.jpg",
      description: "Program pelatihan Ruqyah Syariah sebagai bagian dari warisan sejarah yayasan dalam memberikan solusi spiritual berdasarkan Al-Qur'an dan Sunnah.",
      category: "Spiritual"
    },
    {
      id: 4,
      title: "Kegiatan Pramuka",
      image: "/kegiatan/Pramuka.jpg",
      description: "Aktivitas kepramukaan untuk mengembangkan karakter kepemimpinan, kemandirian, dan kerjasama antar santri.",
      category: "Ekstrakurikuler"
    },
    {
      id: 5,
      title: "Pramuka Gabungan dengan Sekolah Lain",
      image: "/kegiatan/Pramuka-gabungan-dengan-sekolah-lain.jpg",
      description: "Kegiatan pramuka bersama dengan sekolah-sekolah lain di sekitar wilayah untuk mempererat silaturahmi dan kolaborasi.",
      category: "Kolaborasi"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Akademik': return 'bg-blue-100 text-blue-800'
      case 'Pembinaan': return 'bg-green-100 text-green-800'
      case 'Spiritual': return 'bg-purple-100 text-purple-800'
      case 'Ekstrakurikuler': return 'bg-orange-100 text-orange-800'
      case 'Kolaborasi': return 'bg-pink-100 text-pink-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kegiatan Pesantren</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Berbagai aktivitas pembelajaran dan pengembangan diri santri di Pondok Pesantren Al-Badar
            </p>
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(activity.category)}`}>
                    {activity.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Program Kegiatan Rutin</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Pondok Pesantren Al-Badar menyelenggarakan berbagai kegiatan yang dirancang untuk mengembangkan 
              potensi santri secara holistik, baik dari segi akademik, spiritual, maupun sosial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-bold text-blue-800 mb-2">Pembelajaran</h3>
              <p className="text-sm text-blue-600">Tahfidz Al-Qur'an, Kitab Kuning, dan mata pelajaran umum</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl mb-3">🕌</div>
              <h3 className="font-bold text-green-800 mb-2">Spiritual</h3>
              <p className="text-sm text-green-600">Shalat berjamaah, dzikir, dan pembinaan akhlak</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl mb-3">⚽</div>
              <h3 className="font-bold text-orange-800 mb-2">Olahraga</h3>
              <p className="text-sm text-orange-600">Pramuka, olahraga, dan aktivitas fisik lainnya</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-purple-800 mb-2">Sosial</h3>
              <p className="text-sm text-purple-600">Kegiatan kemasyarakatan dan kolaborasi antar sekolah</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ingin Bergabung dengan Kami?</h2>
            <p className="text-lg opacity-90 mb-6">
              Daftarkan putra-putri Anda untuk menjadi bagian dari keluarga besar Pondok Pesantren Al-Badar
            </p>
            <div className="space-y-2">
              <p className="text-sm">📲 Hubungi: 08158710659 (Ustadz. Achmad Junaedi)</p>
              <p className="text-sm">📲 Atau: 08158134160 (Ustadz. Akhmad Sadzali)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
    