"use client"

import styles from "@/components/home.module.css";

import AccountingIcon from "@/components/icons/AccountingIcon";
import ConsultingIcon from "@/components/icons/ConsultingIcon";
import AssuranceIcon from "@/components/icons/AssuranceIcon";
import TaxIcon from "@/components/icons/TaxIcon";
import {useRouter} from "next/navigation";
import Image from "next/image";
import ContactForm from "@/components/ui/contact-form";
import ContactMap from "@/components/ui/contact-map";
import IndustryCarousel from "@/components/ui/industry-carousel";

export default function Home() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center">
            <div className={`${styles.landing} flex items-center h-full w-full md:min-h-[70vh] lg:min-h-[85vh]`} id="landing">
              <span className="flex flex-col w-full h-full px-6 md:px-12 my-8 gap-8 md:max-w-4l md:gap-16 text-[#FFFFFF]">
                  <h1 className="text-center md:text-start text-6l md:text-3l font-serif "> Delivering Results in Compliance</h1>
                  <p className="font-serif ">Excellence, Integrity, Growth: Partnering for Success</p>
                  <button onClick={()=>router.push('/#contact-us')} className="bg-[#C00000] py-4 font-extrabold uppercase md:w-3/4 max-w-[20rem] rounded-xl md:text-2l">
                      Contact Us
                  </button>
              </span>
            </div>
            <hr />

         


            <div className={styles.content}>
            
                <div className="m-9 flex flex-col gap-14" id="our-services">
                    <h2 className="text-center  font-serif underline">Our Services</h2>
                    <div className="flex flex-col md:flex-row justify-between mx-11">
                        <div className="flex flex-1 flex-col items-center gap-14">
                            <AccountingIcon/>
                            <p className="text-l font-serif">Accounting</p>
                        </div>
                        <div className="flex flex-col flex-1 items-center gap-14">
                            <ConsultingIcon/>
                            <p className="text-3 font-serif">Consulting</p>
                        </div>
                        <div className="flex flex-col flex-1 items-center gap-14">
                            <AssuranceIcon/>
                            <p className="text-l font-serif">Assurance</p>
                        </div>
                        <div className="flex flex-col flex-1 items-center gap-14">
                            <TaxIcon/>
                            <p className="w-2/3 text-center text-l font-serif">Tax Planning and Advisory</p>
                        </div>
                    </div>
                    <button
                        className="text-[#FFFFFF] bg-[#C00000] rounded-3l uppercase text-l py-7 px-9 font-extrabold  self-center"
                        onClick={()=>router.push('/services')}
                    >
                        Learn More
                    </button>
                    <hr />
                </div>

                <div className="m-9 flex flex-col gap-7" id="industry">

                
                    <h2 className="text-center">Industry</h2>
                    <IndustryCarousel/>
                    <hr />
                </div>
                <div className="m-9 flex flex-col gap-7" id="contact-us">
                    <h2 className="text-center ">Contact Us</h2>
                    <div className="flex flex-col-reverse h-full w-full items-center gap-6 md:flex-row md:h-[33.875rem] md:pl-8">
                        <div className="w-full md:w-2/5 h-full">
                            <ContactForm/>
                        </div>
                        <div className="w-full md:w-3/5 h-full">
                            <ContactMap/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}