export default function ContactMap(){
    return (
        <div className="flex w-full h-[30rem] md:h-full">
            <div className="w-2/5 bg-[#1e3a8a] flex flex-col text-[#FFFFFF] justify-evenly items-center">
                <span className="text-center flex flex-col">
                    <p className="font-extrabold">Call Us</p>
                    <span className="text-base font-normal">+254 713 324558</span>
                    <span className="text-base font-normal">+254 733 324558</span>
                    <span className="text-base font-normal">+254 7724 256228</span>
                </span>
                <span className="text-center flex flex-col">
                    <p className="font-extrabold">Location</p>
                    
                    <span className="text-base font-normal">Allimex Plaza, 4th floor</span>
                    <span className="text-base font-normal">Near NextGen Mall, Mombasa Road</span>
                    <span className="text-base font-normal">Nairobi</span>
                    
                </span>
                <span className="text-left p-6 flex flex-col">
                    <p className="font-extrabold">Our Top Services</p>
                   

                   <li className="text-base font-normal">Accountancy </li>
                    <li className="text-base font-normal">Tax Services </li>
                    <li className="text-base font-normal">Forensic Investigation</li>
                    <li className="text-base font-normal">Secretarial Services  </li>             
                    <li className="text-base font-normal">Legal & Mediation Support  </li>
                    <li className="text-base font-normal">Management Consultancy Services </li>
                    <li className="text-base font-normal">Audit & Business Advisory Services </li>
                    <li className="text-base font-normal">Dispute Mediation Consultancy Services </li>
                    <li className="text-base font-normal">Human Resource & Personnel Services  </li>
                    <li className="text-base font-normal">Corporate Re-Construction & Insolvency Advisory Services  </li>

                   

                   
                    
                </span>

            </div>
            <div className="w-3/5">
                <iframe
                    width='100%'
                    height='100%'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.749196418621!2d36.83848614377501!3d-1.326431395218985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11c085fe364b%3A0xb5d84beae3a3cd8d!2sAllimex%20Plaza!5e0!3m2!1sen!2ske!4v1723141521205!5m2!1sen!2ske" 
                    style={{border :0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}