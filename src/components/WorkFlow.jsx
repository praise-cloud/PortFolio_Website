import React from 'react'

const WorkFlow = () => {
  return (
        <div className="relative m-5 bg-black rounded-lg text-white">
            <div className="p-8">
                <div className="flex items-center justify-center mb-10">
                    <h1 className="lg:text-8xl md:text-6xl sm:text-4xl font-bold text-wrap w-2/5 text-center">OUR CUSTOMIZED WORK FLOW</h1>
                </div>

                <div className="relative mx-5">
                    <div className="flex items-center justify-center pt-20 px-5 gap-40">
                        <div className="flex items-center gap-5">
                            <div className="text-xl font-normal mb-4">01</div>
                            <h3 className="text-7xl font-semibold mb-4">Understand</h3>
                        </div>

                        <p className="text-left text-xl px-5 text-wrap w-2/4 leading-loose">It's important to identify your requirements first. Not knowing your business well prevents us from developing an effective approach. Adaptation strategy covers an extensive landscape. We have to come up with an approach that works for your company.</p>
                    </div>

                    <div className="relative flex h-0.5 w- bg-white rounded-lg bg-opacity-5"></div>


                    <div className="flex items-center justify-center  py-20 px-20 gap-40">
                        <div className="flex items-center gap-5">
                            <div className="text-xl font-normal mb-4">02</div>
                            <h3 className="text-7xl font-semibold mb-4">Plan</h3>
                        </div>

                        <p className="text-left text-xl px-5 text-wrap w-2/4 leading-loose">It's important to identify your requirements first. Not knowing your business well prevents us from developing an effective approach. Adaptation strategy covers an extensive landscape. We have to come up with an approach that works for your company.</p>
                    </div>

                    <div className="flex items-center justify-center pb-20 px-2 gap-40">
                        <div className="flex items-center gap-5">
                            <div className="text-xl font-normal mb-4">03</div>
                            <h3 className="text-7xl font-semibold mb-4">Execute</h3>
                        </div>

                        <p className="text-left text-xl px-5 text-wrap w-2/4 leading-loose">We implement our plan now. To succeed, we'll manage content, production, development, ads, and campaign optimization. We design the best team for your project using diverse perspectives from our creative base. We curate unique, high-quality content for conversion on key social networks.</p>
                    </div>

                    <div className="flex items-center justify-center px-5 gap-40">
                        <div className="flex items-center gap-5">
                            <div className="text-xl font-normal mb-4">04</div>
                            <h3 className="text-7xl font-semibold mb-4">Result</h3>
                        </div>

                        <p className="text-left text-xl px-5 text-wrap w-2/4 leading-loose">We manage community, monitor user and audience growth focusing on the larger picture. We evaluate our performance, address critical learning points, and identify ways to magnify your brand and accomplish your strategic goals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkFlow
