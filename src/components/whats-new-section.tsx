import { Card, CardContent } from "@/components/ui/card"

const featuredNews = {
  category: "CUSTOMER STORIES",
  title: "Dr. Tulla impressed as CRDB Bank Marathon raises TZS 450 million to support health and community empowerment",
  description: "Continue Reading →",
  image: "https://www.crdbbank.co.tz/storage/app/media/Blog%20and%20Articles/CRDB%20Bank%20Marathon%202025.jpg",
}

const sideNews = [
  {
    id: 1,
    category: "CUSTOMER STORIES",
    title: "More feedback from you online",
    description:
      "The program is focused on empowering women and youth economically by providing them with capital and support to develop...",
    link: "Continue Reading →",
  },
  {
    id: 2,
    category: "CRDB BANK IN NEWS,CUSTOMER STORIES,SUPPORTING COMMUNITIES",
    title: "From Small Farm to Big Success: Shantale's Imbeju Story",
    description: "",
    link: "Continue Reading →",
  },
  {
    id: 3,
    category: "BEYOND BANKING",
    title: "CRDB Bank partners for IMBEJU Youth Startup Empowerment Program",
    description:
      "CRDB Bank supports economic inclusion by partnering with ICTC and COSTECH for the 'IMBEJU' program. The program empowers wome...",
    link: "Continue Reading →",
  },
]

export default function WhatsNewSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What's new</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full border border-gray-200">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="text-sm text-green-600 font-semibold mb-3 uppercase tracking-wide">
                  {featuredNews.category}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-balance leading-tight">
                  {featuredNews.title}
                </h3>
                <div className="group cursor-pointer inline-flex items-center">
                  <span className="text-green-600 hover:text-green-700 font-medium transition-colors">
                    Continue Reading
                  </span>
                  <span className="ml-1 text-green-600 group-hover:text-green-700 transform group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </div>
              </CardContent>
            </div>
          </div>

          {/* Side News Cards */}
          <div className="lg:col-span-1 space-y-6">
            {sideNews.map((item) => (
              <Card
                key={item.id}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-xs text-green-600 font-semibold mb-2 uppercase tracking-wide">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-balance leading-tight">{item.title}</h3>
                  {item.description && (
                    <p className="text-gray-600 text-sm mb-4 text-pretty leading-relaxed">{item.description}</p>
                  )}
                  <div className="group cursor-pointer inline-flex items-center">
                    <span className="text-green-600 hover:text-green-700 font-medium transition-colors">
                      Continue Reading
                    </span>
                    <span className="ml-1 text-green-600 group-hover:text-green-700 transform group-hover:translate-x-1 transition-all duration-200">
                      →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
