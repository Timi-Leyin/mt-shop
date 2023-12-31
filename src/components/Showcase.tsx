
const Showcase = () => {
  return (
    <div className="relative">
    <h2 className="font-2 pt-10 text-3xl md:text-8xl text-center">Variety of Perfumes</h2>
      <div className="relative scale-100 flex w-full overflow-hidden justify-center py-10">
        <img src="/assets/perfume.png" className="w-[400px] translate-x-[70%] object-contain" alt="" />
        <img src="/assets/perfume.png" className="w-[400px] object-contain z-10 scale-110 translate-y-10"  alt="" />
        <img src="/assets/perfume.png" className="w-[400px] translate-x-[-70%] object-contain" alt="" />
      </div>
  </div>
  )
}

export default Showcase