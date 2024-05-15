import profile from '../../public/profile.png'
import Image from 'next/image'
import Link from 'next/link'
import Cart from './cart'
import SearchForm from './search-form'
export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="font-extrabold text-2xl text-white">
          devstore
        </Link>

        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <Cart />
        <div className="w-px h-4 bg-zinc-700"></div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Account</span>
          <Image
            src={profile}
            alt="Imagem de perfil de um garoto"
            width={28}
            height={28}
            className="rounded-full h-7 w-7"
          ></Image>
        </div>
      </div>
    </div>
  )
}
