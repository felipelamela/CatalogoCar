import Link from 'next/link'

interface LinkMenuProps{
  Text:string 
}


const LinkMenu:React.FC<LinkMenuProps> = ({Text}) => {
  return (
    <Link href="/">{Text}</Link>
  )
}

export default LinkMenu