// frontend/app/sejarah/page.tsx

export default function SejarahPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Sejarah Pondok Pesantren Al-Badar</h1>
          <p className="text-center text-lg mt-2 opacity-90">Perjalanan Panjang Menuju Visi Pendidikan Islam</p>
        </div>

        {/* Timeline Content */}
        <div className="space-y-8">
          
          {/* Era Yayasan Rumah Ruqyah Indonesia */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-500">
            <h2 className="text-2xl font-bold text-green-700 mb-4">🌱 Awal Mula: Era Yayasan Rumah Ruqyah Indonesia (2002-2009)</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Sejarah Pondok Pesantren Al-Badar dimulai jauh sebelum berdirinya pesantren itu sendiri. Pada tahun 2002, Ustad Ahmad Junaedi dan timnya memulai perjalanan dengan mendirikan Yayasan Rumah Ruqyah Indonesia. Pada masa awal ini, fokus utama yayasan adalah penerbitan "Majalah Goip", sebuah publikasi yang memiliki misi khusus untuk mengklarifikasi kesalahpahaman masyarakat tentang hal-hal mistis dan memperkuat kepercayaan Islam.
              </p>
              <p>
                Selain kegiatan penerbitan, yayasan juga mengembangkan layanan Ruqyah Syariah yang ditujukan untuk mengatasi masalah-masalah non-medis seperti sihir dan gangguan spiritual lainnya. Pendekatan yang digunakan sepenuhnya berdasarkan Al-Qur'an dan Sunnah, dengan memasukkan penggunaan obat-obatan herbal yang disebutkan dalam teks-teks agama. Layanan ini menjadi ciri khas yayasan pada periode awal dan menarik perhatian masyarakat yang membutuhkan solusi spiritual berdasarkan ajaran Islam.
              </p>
            </div>
          </div>

          {/* Masa Transisi */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">🔄 Masa Transisi: Dampak Era Digital (2007-2009)</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Sekitar tahun 2007, perkembangan teknologi internet mulai memberikan dampak signifikan terhadap kegiatan yayasan. Popularitas "Majalah Goip" mulai menurun seiring dengan mudahnya akses informasi melalui internet. Perubahan ini memaksa yayasan untuk melakukan evaluasi dan reorientasi terhadap program-program yang dijalankan.
              </p>
              <p>
                Menghadapi tantangan tersebut, yayasan memutuskan untuk mengalihkan fokus utama kepada layanan Ruqyah yang ternyata masih memiliki permintaan tinggi dari masyarakat. Transisi ini berujung pada pendirian resmi Yayasan Rumah Ruqyah Indonesia pada tahun 2009, yang menandai babak baru dalam perjalanan organisasi ini.
              </p>
            </div>
          </div>

          {/* Observasi dan Konsep Baru */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">💡 Observasi dan Konsep Baru: Lahirnya Gagasan Daru Taibin</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Dalam perjalanan melayani masyarakat melalui program Ruqyah, Ustad Ahmad Junaedi dan timnya melakukan observasi mendalam terhadap kondisi literasi keagamaan masyarakat. Mereka menemukan fenomena yang mengkhawatirkan: banyak orang, terutama generasi dewasa, tidak memiliki literasi dasar Al-Qur'an yang memadai. Temuan ini menjadi titik balik dalam visi dan misi yayasan.
              </p>
              <p>
                Berdasarkan observasi tersebut, yayasan kemudian menyusun gagasan Daru Taibin, sebuah konsep sekolah asrama yang khusus dirancang untuk orang tua atau generasi dewasa yang ingin memperdalam pemahaman agama. Konsep ini merupakan inovasi dalam dunia pendidikan Islam, mengingat kebanyakan pesantren pada umumnya fokus pada pendidikan anak-anak dan remaja.
              </p>
            </div>
          </div>

          {/* Pencarian Lokasi */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
            <h2 className="text-2xl font-bold text-orange-700 mb-4">🗺️ Pencarian Lokasi: Perjalanan Panjang Menuju Pabuaran (2009-2021)</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Implementasi gagasan Daru Taibin memerlukan lokasi yang tepat dan strategis. Proses pencarian lokasi ini ternyata menjadi salah satu tantangan terbesar yang dihadapi yayasan. Perjalanan pencarian lokasi berlangsung selama lebih dari satu dekade, dengan berbagai lokasi yang sempat dipertimbangkan namun akhirnya tidak terealisasi.
              </p>
              <p>
                Upaya pertama dilakukan di Bekasi, namun gagal karena berbagai kendala teknis dan administratif. Selanjutnya, yayasan mencoba mengamankan lahan di Cikarang dengan luas 1 hektar, tetapi upaya ini pun tidak berhasil. Pencarian kemudian berlanjut ke Lebak di Banten, yang juga mengalami kegagalan. Lokasi lain yang pernah dipertimbangkan adalah Anyer dan Sukabumi, namun keduanya juga tidak dapat direalisasikan karena berbagai hambatan.
              </p>
            </div>
          </div>

          {/* Masa Pandemi */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-500">
            <h2 className="text-2xl font-bold text-red-700 mb-4">🦠 Masa Pandemi: Kesempatan di Tengah Krisis (2021)</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Tahun 2021 menjadi titik balik dalam sejarah yayasan. Di tengah-tengah pandemi COVID-19 yang melanda dunia, yayasan akhirnya berhasil mengamankan lahan di Pabuaran, Sukamakmur, Bogor. Ironi dari situasi ini adalah bahwa krisis global justru membuka peluang bagi yayasan untuk mewujudkan impian yang telah lama diidamkan.
              </p>
              <p>
                Lahan yang berhasil diperoleh memiliki luas 5.700 meter persegi, cukup untuk mengembangkan konsep pesantren yang telah dirancang. Lokasi di Pabuaran dipilih karena berada di daerah perbukitan yang memberikan suasana kondusif untuk pembelajaran, memiliki sumber daya air yang memadai, dan dapat terintegrasi dengan baik dengan masyarakat setempat.
              </p>
            </div>
          </div>

          {/* Transformasi Visi */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-teal-500">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">🎯 Transformasi Visi: Dari Daru Taibin ke Pondok Pesantren Al-Badar</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Setelah berhasil mengamankan lahan di Pabuaran, yayasan mengalami transformasi visi yang signifikan. Konsep awal Daru Taibin yang fokus pada pendidikan orang tua kemudian berkembang menjadi Pondok Pesantren Al-Badar dengan fokus pada pendidikan anak-anak dan remaja. Perubahan ini dilakukan berdasarkan analisis kebutuhan masyarakat dan peluang yang ada.
              </p>
              <p>
                Transformasi ini juga diiringi dengan perubahan nama yayasan menjadi Yayasan Al-Badar Darut-Aibin, yang menunjukkan komitmen terhadap visi baru dalam dunia pendidikan Islam. Meskipun mengalami perubahan fokus, esensi dari misi awal tetap dipertahankan, yaitu meningkatkan literasi keagamaan dan memperkuat pemahaman Islam di masyarakat.
              </p>
            </div>
          </div>

          {/* Membangun Fondasi */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-500">
            <h2 className="text-2xl font-bold text-yellow-700 mb-4">🏗️ Membangun Fondasi: Awal Pembangunan Pesantren</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Dengan lahan yang telah diamankan, yayasan mulai membangun infrastruktur pesantren secara bertahap. Pembangunan dimulai dengan fasilitas-fasilitas dasar yang diperlukan untuk operasional pesantren. Pendekatan bertahap ini dipilih mengingat keterbatasan sumber daya finansial dan filosofi yayasan yang lebih mengutamakan keberlanjutan daripada pembangunan yang ambisius namun tidak berkelanjutan.
              </p>
              <p>
                Perjalanan panjang dari tahun 2002 hingga 2021 menunjukkan dedikasi dan ketekunan Ustad Ahmad Junaedi dan timnya dalam mewujudkan visi pendidikan Islam yang berkualitas. Sejarah ini juga mencerminkan kemampuan adaptasi organisasi dalam menghadapi perubahan zaman dan tantangan yang ada, dari era majalah cetak hingga era digital, dari konsep pendidikan orang tua hingga pesantren untuk anak-anak dan remaja.
              </p>
            </div>
          </div>

          {/* Kesimpulan */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">✨ Warisan dan Visi Masa Depan</h2>
            <p className="text-center text-lg opacity-90">
              Pondok Pesantren Al-Badar kini berdiri sebagai bukti ketekunan dan komitmen terhadap pendidikan Islam berkualitas. 
              Dari perjalanan panjang selama hampir dua dekade, pesantren ini siap melanjutkan misi mencetak generasi Qur'ani, Rabbani, dan Madani.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
