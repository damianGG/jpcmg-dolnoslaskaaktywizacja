import Image from "next/image";
import logoUE from '../../../../../public/img/logos/lubelskie_logo-removebg-preview.png'
// ===================================================================

// ===================================================================

export default function Toplogo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        src="/img/logos/feds.jpg"
        alt="logo"
        sizes="90vw"
        width={1200}
        height={100}
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '1000px',
        }} />

    </div>
  );
}
