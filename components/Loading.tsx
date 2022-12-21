import Image from "next/image"

const Loading = () => {
    const imgLink = 'https://i.gifer.com/4xjS.gif'

  return (
    <div className="flex items-center">
        <Image src={imgLink} alt="loading..." width={60} height={60} />
    </div>
  )
}

export default Loading