import Image from 'next/image'
import logoImage from '@/images/pug_logo.png'

export function Logo(props) {
  return (
    <Image src={logoImage} width={200} height={200} {...props}></Image>
  )
}
