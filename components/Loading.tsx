
const Loading = () => {
    const imgLink = 'https://i.gifer.com/4xjS.gif'

  return (
    <div className="flex items-center">
        <img src={imgLink} alt="loading..." width={60} height={60} />
    </div>
  )
}

export default Loading