export default function Card(){
  return (
      <div className="relative grid h-72 w-44 flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://cdn.tatlerasia.com/tatlerasia/i/2021/11/02155505-gettyimages-153402603_cover_1361x1800.jpg')] bg-cover bg-center">
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative text-center p-6 px-6 py-14 md:px-12">
    <h2 className="mb-3 text-xl font-medium text-white">
      Officials
    </h2>
  </div>
</div>
  )
}


