import type { Project } from "@/data/projects";

/** Original schematic artwork, not a photograph or a measured result. */
export function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  return <div className={`project-visual visual-${kind}`} aria-hidden="true">
    <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {kind === "vision" && <>
          <path d="M65 90h125v40H65M190 85h86v50h-86M276 96h140v28H276" />
          {[100,108,116].map(y => <path key={y} d={`M76 ${y}h110M287 ${y}h120`} opacity=".45" />)}
          <path d="M180 71V55h25m78 16V55h-25m25 94v16h-25m-78-16v16h25" strokeWidth="3" />
          <path d="M233 45v130M158 110h151" strokeDasharray="4 6" opacity=".35" />
          <path d="M191 187h85m-85-5v10m85-10v10" />
          <circle cx="233" cy="110" r="9" />
        </>}
        {kind === "energy" && <>
          <rect x="65" y="64" width="83" height="92" rx="7"/><path d="m108 80-17 31h26l-17 29" />
          <path d="M148 110h56m72 0h56"/><rect x="204" y="78" width="72" height="64" rx="5"/>
          <circle cx="240" cy="110" r="12"/><rect x="332" y="64" width="83" height="92" rx="7"/>
          <path d="M344 140V82m0 58h57m-46-9v-17m14 17V95m14 36v-25m14 25V88"/>
        </>}
        {(kind === "motor" || kind === "gear") && <>
          <circle cx="193" cy="110" r="63"/><circle cx="193" cy="110" r="43"/><circle cx="193" cy="110" r="14"/>
          <path d="M207 110h123m-72-12v24m32-24v24M150 163l-9 18h104l-9-18"/>
          <rect x="330" y="80" width="55" height="60" rx="5"/><path d="M148 75h90M133 110h46M148 145h90" opacity=".5"/>
        </>}
        {kind === "battery" && <>
          <path d="m98 84 62-38 230 0 0 110-62 39H98Z"/><path d="m98 84 230 0 62-38M328 84v111"/>
          {[0,1,2,3,4,5].map(i => <g key={i}><rect x={113+i*34} y="99" width="23" height="76" rx="10"/><path d={`m${119+i*34} 67 22-13`} opacity=".5"/></g>)}
        </>}
        {kind === "cnc" && <>
          <path d="M86 165h310M110 165V55h265v110M132 72h220M132 87h220"/>
          <rect x="215" y="72" width="51" height="52"/><path d="M240 124v29m-12-9 12 9 12-9M163 165v-23h148v23"/>
          <path d="M80 44h316m-12-7 12 7-12 7M80 178v-38m-7 10 7-10 7 10" opacity=".5"/>
        </>}
        {kind === "lane" && <>
          <path d="m90 195 117-170m184 170L273 25M159 195l65-170m103 170L257 25"/>
          <path d="M243 187v-29m0-22v-25m0-18V73m0-15V43" strokeDasharray="9 6"/>
          <path d="m205 159 38-38 38 38m-38-38v62" strokeWidth="3"/>
        </>}
        {kind === "robot" && <>
          <path d="M74 170h335M74 188h335M143 170V102h177v68"/>
          <circle cx="173" cy="163" r="22"/><circle cx="290" cy="163" r="22"/>
          <path d="M229 102V66h63m-38 0 25-23"/><rect x="284" y="47" width="38" height="30" rx="4"/>
          <circle cx="305" cy="62" r="7"/><path d="M159 116h145m-110 0v26m44-26v26" opacity=".5"/>
        </>}
      </g>
    </svg>
    <span className="schematic-label">SCHÉMA ILLUSTRATIF</span>
    <span className="cross cross-a">+</span><span className="cross cross-b">+</span>
  </div>;
}
