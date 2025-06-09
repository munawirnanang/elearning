import { Button } from "@/components/ui/button"

const products = [
    {
      id: 1,
      title: 'Digital Marketing untuk Pemula',
      category: 'Digital Skill',
      href: '#',
      price: 'Rp. 799.000',
      discount: 'Rp. 499.000',
      imageSrc: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
        id: 2,
        title: 'Budidaya lele omset 10 juta',
        category: 'UMKM Level Up',
        href: '#',
        price: 'Rp. 799.000',
        discount: 'Rp. 499.000',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1663040089947-145a84e26a9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt:
          'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
      },
      {
        id: 3,
        title: 'Hosting Usahamu di google',
        category: 'Google for Business',
        href: '#',
        price: 'Rp. 799.000',
        discount: 'Rp. 499.000',
        imageSrc: 'https://images.unsplash.com/photo-1594402919317-9e67dca0a305?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt:
          'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
      },
      {
        id: 4,
        title: 'Hosting Usahamu di google',
        category: 'Google for Business',
        href: '#',
        price: 'Rp. 799.000',
        discount: 'Rp. 499.000',
        imageSrc: 'https://images.unsplash.com/photo-1594402919317-9e67dca0a305?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt:
          'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
      },
      {
        id: 5,
        title: 'Budidaya lele omset 10 juta',
        category: 'UMKM Level Up',
        href: '#',
        price: 'Rp. 799.000',
        discount: 'Rp. 499.000',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1663040089947-145a84e26a9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt:
          'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
      },
      {
        id: 6,
        title: 'Digital Marketing untuk Pemula',
        category: 'Digital Skill',
        href: '#',
        price: 'Rp. 799.000',
        discount: 'Rp. 499.000',
        imageSrc: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt:
          'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
      },
    // More products...
  ]
  
  export default function Products() {
    return (
      <div className="mt-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-8 sm:py-8 lg:max-w-7xl">
          <p className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">Our Recommendation</p>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-primary">
                  <img alt={product.imageAlt} src={product.imageSrc} className="object-cover object-center" />
                </div>
                <div className="inline absolute top-0 rounded-full bg-white ring-1 ring-primary m-4 px-2 py-1 text-center text-sm font-medium text-gray-900">
                    {product.category}
                </div>
                <div className="inline absolute bottom-10 rounded-full bg-white ring-1 ring-primary m-4 px-2 py-1 text-center text-sm font-medium text-gray-900">
                    {product.title}
                </div>
                <div className="inline absolute bottom-0 rounded-full bg-white ring-1 ring-primary m-4 px-2 py-1 text-center text-sm font-medium text-gray-900">
                    <span className="text-red-400 line-through pr-2">{product.price}</span><span>{product.discount}</span>
                </div>
                <Button variant="destructive" className="inline absolute right-0 bottom-0 m-4 px-4 py-1 ring-1 ring-black rounded-full">Pilih</Button>
                {/* <div className="inline absolute right-0 bottom-0 rounded-full bg-red-600 hover:bg-white ring-1 ring-primary m-4 px-4 py-1 text-center text-sm font-medium text-black">
                    Pilih
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  