import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { fainestSports, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Image =({w,h})=>{
  return(
    <img
    className="object-cover md:object-right"
    width={w}
    alt="Smartest AI"
    height={h}
    src={service1}
  />
  )
}
const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Sports and Recreation."
          text="A healthier, happiers family full of fitness"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <div className="grid grid-cols-2 items-center gap-10">
              <Image w={380} h={360} />
              <Image w={380} h={360} />
              <Image w={380} h={360} />
              </div>
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Talents discovery</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Unlocks the potential of our students in a variety of sports and 
                recreation.
              </p>
              <ul className="body-2">
                {fainestSports.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2"
            title="A healthier brain carried in a fully fit body"
            />
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
