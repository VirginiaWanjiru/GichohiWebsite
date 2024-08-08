import LogoLarge from "@/components/icons/LogoLarge";



export default function Footer() {
  return (
    <footer className="bg-[#C00000] text-[#FAFAFA] pl-3 pt-6 pb-14 font-serif">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <LogoLarge/>

          <div className="mt-2 font-serif">
            <p>Excellence, Integrity, Growth: Partnering for Success</p>
          </div>
        </div>
        <div> </div>
        <div className="md:mr-3 font-serif p=6">
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
