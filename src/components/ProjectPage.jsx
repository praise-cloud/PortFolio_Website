import React from 'react'

const ProjectPage = () => {
  return (
    <div className="relative  p-5">
        <div className="relative p-5 bg-black rounded-lg">
            <div className="flex justify-center items-center py-20">
                <p className="text-2xl text-gray-400">Projects Worked On</p>
            </div>

            <div className="relative px-56 pb-20 w-full mx-auto">

                <a href="#">
                <div className="py-10">
                    <p className="lg:text-[16px] sm:text-[12px] text-slate-300">HEALTH MANAGEMENT SYSTEM</p>
                    <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-slate-200 py-5">MediLink</h1>
                    <hr />
                </div>
                </a>

                <a href="#">
                    <div className="py-10">
                        <p className="lg:text-[16px] sm:text-[12px] text-slate-300">AI LEARNING PLATFORM</p>
                        <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-slate-200 py-5">LeranFlow.ai</h1>
                        <hr />
                    </div>
                </a>

                <a href="#">
                    <div className="py-10">
                        <p className="lg:text-[16px] sm:text-[12px] text-slate-500">COMING SOON</p>
                        <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-slate-500 py-5">DR.MIC</h1>
                        <hr />
                    </div>
                </a>

                <a href="#">
                    <div className="py-10">
                        <p className="lg:text-[16px] sm:text-[12px] text-slate-500">SEE MORE ON</p>
                        <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-slate-200 py-5">GitHub</h1>
                        <hr />
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectPage
