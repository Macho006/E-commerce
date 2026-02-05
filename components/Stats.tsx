import React from 'react';

const Stats = () => {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 max-w-2xl text-[#1A1A1A]">
                Наша цель - создать фантастический сервис для всех потребителей
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <div className="text-5xl font-bold text-[#FF5959] mb-4">5</div>
                    <p className="text-[#0F1113] text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc.
                    </p>
                </div>
                <div>
                    <div className="text-5xl font-bold text-[#FF5959] mb-4">30</div>
                    <p className="text-[#0F1113] text-sm leading-relaxed">
                        Gravida vel convallis id aliquet volutpat nullam dignissim. Amet parturient elementum lectus rhoncus at.
                    </p>
                </div>
                <div>
                    <div className="text-5xl font-bold text-[#FF5959] mb-4">300</div>
                    <p className="text-[#0F1113] text-sm leading-relaxed">
                        Sed varius ut venenatis id amet et consectetur pellentesque. Vitae urna ornare vel suspendisse tincidunt.
                    </p>
                </div>
                <div>
                    <div className="text-5xl font-bold text-[#FF5959] mb-4">8</div>
                    <p className="text-[#0F1113] text-sm leading-relaxed">
                        Id enim ornare lacus duis. Ac fermentum auctor cras adipiscing feugiat quis convallis velit.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Stats;