export default function VisiMisiPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            VISI, MISI & TUJUAN
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Visi Section */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">VISI</h2>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-l-4 border-green-600">
            <p className="text-lg text-gray-700 leading-relaxed text-center font-medium">
              Unggul dalam bidang Tahfizh Qur'an dan Turost Klasik (Kitab Kuning) dan internasional program.
            </p>
          </div>
        </section>

        {/* Misi Section */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">MISI</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</span>
                <p className="text-gray-700 leading-relaxed">
                  Melakukan pembinaan pada santri agar memiliki rasa cinta dan dekat dengan Al-Qur'an, Turost Klasik dan Bahasa
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</span>
                <p className="text-gray-700 leading-relaxed">
                  Melakukan pembinaan pada santri untuk memahami ilmu agama seperti Tauhid, Fiqih dan menghafal Al-Qur'an 30 Juz;
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</span>
                <p className="text-gray-700 leading-relaxed">
                  Menanamkan Akhlakul Karimah berlandaskan akhlak mulya Baginda Nabi.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">4</span>
                <p className="text-gray-700 leading-relaxed">
                  Membina santri menjadi muslim yang cerdas, berjiwa pemimpin, bertanggungjawab dan menjadi generasi yang bermanfaat untuk umat.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">5</span>
                <p className="text-gray-700 leading-relaxed">
                  Membangun kemampuan akademik dan non akademik baik hard skill ataupun soft skill untuk dapat bersaing tingkat nasional dan internasional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tujuan Section */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">TUJUAN</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
              <div className="flex items-start space-x-4">
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</span>
                <p className="text-gray-700 leading-relaxed">
                  Mencetak Generasi Qur'ani, Rabbani, dan Madani.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
              <div className="flex items-start space-x-4">
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</span>
                <p className="text-gray-700 leading-relaxed">
                  Mencetak alumni yang bisa menghadapi tantangan zaman serta memiliki kemampuan soleh sosial dan soleh spiritual tingkat Nasional maupun Internasional.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
              <div className="flex items-start space-x-4">
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</span>
                <p className="text-gray-700 leading-relaxed">
                  Mencetak para lulusan yang ahli dalam berbagai bidang berorientasi ulama yang berintelektual imamal muttaqin, sholihin toi'inalloh, warosullih.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}