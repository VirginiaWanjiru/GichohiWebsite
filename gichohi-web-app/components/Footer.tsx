import logo from "../../images/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#C00000] text-[#FAFAFA] pl-3 pt-8 pb-16">
      <div className="grid grid-cols-3">
        <div>
          <div className=" bg-[#FAFAFA] flex p-3">
            <Image src={logo} alt="Gichohi Website" style={{ width: "50px" }} />

            <div className="text-[#000000] ml-3">
              <h1 className="font-bold">H.W. Gichohi & Company</h1>
              <h3 className="font-bold">CERTIFIED PUBLIC ACCOUNTANTS</h3>
            </div>
          </div>

          <div className="mt-3">
            <p>Excellence, Integrity, Growth: Partnering for Success</p>
          </div>
        </div>
        <div> </div>
        <div className="mr-5">
          <p>
            ©H.W Gichohi and Co. All rights reserved. H.W Gichohi and Co refers
            to the H.W Gichohi and Co network and/or one or more of its member
            firms, each of which is a separate legal entity.
          </p>
        </div>
      </div>
    </footer>
  );
}
