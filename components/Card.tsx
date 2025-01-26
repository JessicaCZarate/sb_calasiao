export default function Card(){
  return (
      <div className="relative grid h-72 w-44 flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1661164078195-3bc37a1103fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
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


