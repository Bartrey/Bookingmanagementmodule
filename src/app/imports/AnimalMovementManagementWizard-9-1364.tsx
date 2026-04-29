import svgPaths from "./svg-emrpp7d6g9";

function Heading() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[17px] w-[228.438px]" data-name="Heading 1">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Landbouwmonitoringsnetwerk 3</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[34px] left-0 rounded-[4px] top-0 w-[200px]" data-name="Text Input">
      <div className="content-stretch flex h-[34px] items-center overflow-clip pl-[12px] pr-[40px] py-[4px] relative rounded-[inherit] w-[200px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a7282] text-[16px] text-nowrap whitespace-pre">LANDBUURBEHEEDER</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p48af40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p30908200} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-[16px]">
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[69.42%_12.5%_12.5%_69.42%]" data-name="Vector">
        <div className="absolute inset-[-23.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M3.56 3.56L0.666667 0.666667" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p1b38bb40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[16px] items-start relative w-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-[156px] top-[9px] w-[36px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[34px] left-[1237px] top-[12px] w-[200px]" data-name="Container">
      <TextInput />
      <Container />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[gold] h-[59px] relative shrink-0 w-[1461px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5c100] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[59px] relative w-[1461px]">
        <Heading />
        <Container1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-nowrap whitespace-pre">Startscherm</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#ffed4e] h-[41px] relative shrink-0 w-[1461px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5d43e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[41px] items-start pb-px pl-[24px] pr-[1353.52px] pt-[9px] relative w-[1461px]">
        <Text />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10">
            <path d={svgPaths.p12f93600} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.26%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
            <path d={svgPaths.p3656c470} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-[28px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
            <path d={svgPaths.p3a0d2780} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-[28px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[53px] relative shrink-0 w-[223px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[53px] items-start pb-px pt-[12px] px-[12px] relative w-[223px]">
        <Container3 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[223px]" data-name="Link">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#364153] text-[16px] text-nowrap top-[6px] whitespace-pre">Bedrijfskaartgroepen</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[40px] left-0 top-[8px] w-[223px]" data-name="List Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[223px]" data-name="Link">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#364153] text-[16px] text-nowrap top-[6px] whitespace-pre">Investeringsplan</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[40px] left-0 top-[48px] w-[223px]" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[223px]" data-name="Link">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#364153] text-[16px] text-nowrap top-[6px] whitespace-pre">Perceelgroepen</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[40px] left-0 top-[88px] w-[223px]" data-name="List Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[223px]" data-name="Link">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#364153] text-[16px] text-nowrap top-[6px] whitespace-pre">Teeltplan</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute h-[40px] left-0 top-[128px] w-[223px]" data-name="List Item">
      <Link3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[85.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[85.875px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[43px] text-[#101828] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">BOEKINGEN</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-gray-100 content-stretch flex h-[40px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[223px]" data-name="Button">
      <Text1 />
      <Icon4 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="absolute h-[40px] left-0 top-[176px] w-[223px]" data-name="List Item">
      <Button4 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[26.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[26.125px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[13.5px] text-[#101828] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">VEE</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-gray-100 content-stretch flex h-[40px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[223px]" data-name="Button">
      <Text2 />
      <Icon5 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[223px]" data-name="Link">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[32px] text-[#364153] text-[16px] text-nowrap top-[6px] whitespace-pre">Facturen groepsvee</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[223px]" data-name="Link">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[32px] text-[#364153] text-[16px] text-nowrap top-[6px] whitespace-pre">Veebew. in groep</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[223px]" data-name="Link">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[32px] text-[#364153] text-[16px] text-nowrap top-[6px] whitespace-pre">Facturen ind. vee</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[223px]" data-name="Link">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[32px] text-[#364153] text-[16px] text-nowrap top-[6px] whitespace-pre">Veebew. individueel</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#155dfc] h-[40px] left-0 top-0 w-[223px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[32px] text-[16px] text-nowrap text-white top-[6px] whitespace-pre">Individueel vee</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <Button6 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[223px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[32px] text-[#364153] text-[16px] text-nowrap top-[6px] whitespace-pre">Veebewegingen individueel</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <Button7 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute bg-gray-50 content-stretch flex flex-col h-[240px] items-start left-0 top-[40px] w-[223px]" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
    </div>
  );
}

function ListItem11() {
  return (
    <div className="absolute h-[280px] left-0 top-[216px] w-[223px]" data-name="List Item">
      <Button5 />
      <List />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[84.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[84.688px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[42.5px] text-[#101828] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">AFSLUITING</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-gray-100 content-stretch flex h-[40px] items-center justify-between left-0 px-[16px] py-0 top-0 w-[223px]" data-name="Button">
      <Text3 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="absolute h-[40px] left-0 top-[496px] w-[223px]" data-name="List Item">
      <Button8 />
    </div>
  );
}

function List1() {
  return (
    <div className="h-[544px] relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[223px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit] w-[223px]">
        <List1 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10">
            <path d={svgPaths.p12f93600} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.26%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
            <path d={svgPaths.p3656c470} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-[28px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
            <path d={svgPaths.p3a0d2780} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-[28px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[53px] relative shrink-0 w-[223px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[53px] items-start pb-0 pt-[13px] px-[12px] relative w-[223px]">
        <Container5 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-white h-[1869px] relative shrink-0 w-[224px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[1869px] items-start pl-0 pr-px py-0 relative w-[224px]">
        <Container4 />
        <Navigation />
        <Container6 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#101828] text-[20px] text-nowrap top-[-3px] whitespace-pre">Dierregistratie – Overzicht</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">Gebruik de zoekfilters om specifieke dieren te vinden. Klik op een dier om de boekingshistoriek te bekijken.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[91px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-[91px] items-start pb-px pt-[16px] px-[24px] relative w-full">
          <Heading1 />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[73.719px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[73.719px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[37px] text-[#101828] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Zoekfilters</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[56px] items-center justify-between px-[24px] py-0 relative w-full">
          <Heading2 />
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-nowrap top-[-2px] whitespace-pre">Dier naam</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="h-[42px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[42px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Bijv. BRUNO</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Label />
      <TextInput1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-nowrap top-[-2px] whitespace-pre">Sanitelnummer</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="h-[42px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[42px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Bijv. BE123456789</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Label1 />
      <TextInput2 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-nowrap top-[-2px] whitespace-pre">Ras</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="h-[42px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[42px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Bijv. Holstein</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Label2 />
      <TextInput3 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-nowrap top-[-2px] whitespace-pre">Geboortedatum van</p>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="h-[42px] relative rounded-[8px] shrink-0 w-full" data-name="Date Picker">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Label3 />
      <DatePicker />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[70px] left-[24px] top-0 w-[1141px]" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-nowrap top-[-2px] whitespace-pre">Geboortedatum tot</p>
    </div>
  );
}

function DatePicker1() {
  return (
    <div className="h-[42px] relative rounded-[8px] shrink-0 w-full" data-name="Date Picker">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[70px] items-start left-[24px] top-[86px] w-[273.25px]" data-name="Container">
      <Label4 />
      <DatePicker1 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#155dfc] h-[42px] relative rounded-[4px] shrink-0 w-[108.25px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[42px] relative w-[108.25px]">
        <Icon10 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[66px] text-[16px] text-center text-nowrap text-white top-[7px] translate-x-[-50%] whitespace-pre">Zoeken</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[17px] size-[16px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12949080} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 2V5.33333H5.33333" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[42px] relative rounded-[4px] shrink-0 w-[224.094px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[42px] relative w-[224.094px]">
        <Icon11 />
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[124px] text-[#364153] text-[16px] text-center text-nowrap top-[7px] translate-x-[-50%] whitespace-pre">Zoekvelden initialiseren</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[42px] items-start left-[24px] top-[172px] w-[1141px]" data-name="Container">
      <Button12 />
      <Button13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[230px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col h-[287px] items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button11 />
      <Container15 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-2px] w-[142px]">52 dieren gevonden</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[49px] items-start pb-px pt-[12px] px-[24px] relative w-full">
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell() {
  return <div className="absolute h-[72.5px] left-0 top-0 w-[76px]" data-name="Header Cell" />;
}

function HeaderCell1() {
  return (
    <div className="absolute h-[72.5px] left-[76px] top-0 w-[162.875px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[24px] text-[#364153] text-[16px] text-nowrap top-[22px] whitespace-pre">Sanitelnummer</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[72.5px] left-[238.88px] top-0 w-[109.047px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[24px] text-[#364153] text-[16px] text-nowrap top-[22px] whitespace-pre">Naam</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[72.5px] left-[347.92px] top-0 w-[143.031px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[24px] text-[#364153] text-[16px] text-nowrap top-[22px] whitespace-pre">Ras</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[72.5px] left-[490.95px] top-0 w-[168.25px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[24px] text-[#364153] text-[16px] text-nowrap top-[22px] whitespace-pre">Geboortedatum</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[72.5px] left-[659.2px] top-0 w-[206.188px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[24px] text-[#364153] text-[16px] top-[10px] w-[100px]">Huidige diercategorie</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute h-[72.5px] left-[865.39px] top-0 w-[136.094px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[24px] text-[#364153] text-[16px] text-nowrap top-[22px] whitespace-pre">Moederdier</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute h-[72.5px] left-[1001.48px] top-0 w-[187.516px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[24px] text-[#364153] text-[16px] text-nowrap top-[22px] whitespace-pre">Acties</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[72.5px] left-0 top-0 w-[1189px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-gray-50 border-[0px_0px_1px] border-gray-200 border-solid h-[72.5px] left-0 top-0 w-[1189px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[28px] top-[31.5px]" data-name="Button">
      <Icon12 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[76px]" data-name="Table Cell">
      <Button14 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[93px] left-[76px] top-0 w-[162.875px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">BE123456789</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[93px] left-[238.88px] top-0 w-[109.047px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">BRUNO</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[93px] left-[347.92px] top-0 w-[143.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] top-[20.5px] w-[59px]">Holstein Friesian</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[93px] left-[490.95px] top-0 w-[168.25px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">15/03/2020</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[93px] left-[659.2px] top-0 w-[206.188px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">melkkoe</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[93px] left-[865.39px] top-0 w-[136.094px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Betsy</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[12px] size-[13.125px] top-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.73438 6.5625H10.3906" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
          <path d="M6.5625 2.73438V10.3906" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-[#155dfc] h-[60px] left-[24px] rounded-[4px] top-[16.5px] w-[139.516px]" data-name="Button">
      <Icon13 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[80.59px] text-[16px] text-center text-white top-[4px] translate-x-[-50%] w-[58px]">Nieuwe boeking</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[93px] left-[1001.48px] top-0 w-[187.516px]" data-name="Table Cell">
      <Button15 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[93px] left-0 top-0 w-[1189px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] top-[-2px] w-[147px]">Boekingshistoriek (3)</p>
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="absolute h-[48.5px] left-0 top-0 w-[126.219px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[16px] text-[#364153] text-[16px] text-nowrap top-[10px] whitespace-pre">Datum</p>
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="absolute h-[48.5px] left-[126.22px] top-0 w-[173.219px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[16px] text-[#364153] text-[16px] text-nowrap top-[10px] whitespace-pre">Handeling</p>
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="absolute h-[48.5px] left-[299.44px] top-0 w-[142.078px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[16px] text-[#364153] text-[16px] text-nowrap top-[10px] whitespace-pre">Gewicht (kg)</p>
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="absolute h-[48.5px] left-[441.52px] top-0 w-[194.875px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[16px] text-[#364153] text-[16px] text-nowrap top-[10px] whitespace-pre">Leeftijd (maanden)</p>
    </div>
  );
}

function HeaderCell12() {
  return (
    <div className="absolute h-[48.5px] left-[636.39px] top-0 w-[256.438px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[16px] text-[#364153] text-[16px] text-nowrap top-[10px] whitespace-pre">Diercategorie</p>
    </div>
  );
}

function HeaderCell13() {
  return (
    <div className="absolute h-[48.5px] left-[892.83px] top-0 w-[99.578px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[16px] text-[#364153] text-[16px] text-nowrap top-[10px] whitespace-pre">Waarde</p>
    </div>
  );
}

function HeaderCell14() {
  return (
    <div className="absolute h-[48.5px] left-[992.41px] top-0 w-[114.594px]" data-name="Header Cell">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[16px] text-[#364153] text-[16px] text-nowrap top-[10px] whitespace-pre">Acties</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[48.5px] left-0 top-0 w-[1107px]" data-name="Table Row">
      <HeaderCell8 />
      <HeaderCell9 />
      <HeaderCell10 />
      <HeaderCell11 />
      <HeaderCell12 />
      <HeaderCell13 />
      <HeaderCell14 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute bg-gray-100 border-[0px_0px_1px] border-gray-200 border-solid h-[48.5px] left-0 top-0 w-[1107px]" data-name="Table Header">
      <TableRow2 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[51px] left-0 top-0 w-[126.219px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">04/04/2024</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[51px] left-[126.22px] top-0 w-[173.219px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">interne beweging</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[51px] left-[299.44px] top-0 w-[142.078px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">196</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[51px] left-[441.52px] top-0 w-[194.875px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">20.27</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[51px] left-[636.39px] top-0 w-[256.438px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#4a5565] text-[16px] text-nowrap top-[11.5px] whitespace-pre">vleeskoe</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[51px] left-[892.83px] top-0 w-[99.578px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">€312</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26302300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[12.5px] w-[70.984px]" data-name="Button">
      <Icon14 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[45px] text-[#155dfc] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Bewerk</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[51px] left-[992.41px] top-0 w-[114.594px]" data-name="Table Cell">
      <Button16 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[51px] left-0 top-0 w-[1107px]" data-name="Table Row">
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[51px] left-0 top-0 w-[126.219px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">03/09/2024</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[51px] left-[126.22px] top-0 w-[173.219px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">sterfte</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[51px] left-[299.44px] top-0 w-[142.078px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">175</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[51px] left-[441.52px] top-0 w-[194.875px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">45.53</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[51px] left-[636.39px] top-0 w-[256.438px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#4a5565] text-[16px] text-nowrap top-[11.5px] whitespace-pre">vrouwelijk jongvee melkvee</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[51px] left-[892.83px] top-0 w-[99.578px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">€1042</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26302300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[12.5px] w-[70.984px]" data-name="Button">
      <Icon15 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[45px] text-[#155dfc] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Bewerk</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[51px] left-[992.41px] top-0 w-[114.594px]" data-name="Table Cell">
      <Button17 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[51px] left-0 top-[51px] w-[1107px]" data-name="Table Row">
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[50.5px] left-0 top-0 w-[126.219px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">25/01/2025</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[50.5px] left-[126.22px] top-0 w-[173.219px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">overgang</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[50.5px] left-[299.44px] top-0 w-[142.078px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">671</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[50.5px] left-[441.52px] top-0 w-[194.875px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">17.87</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[50.5px] left-[636.39px] top-0 w-[256.438px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#4a5565] text-[16px] text-nowrap top-[11.5px] whitespace-pre">zoogkoe</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[50.5px] left-[892.83px] top-0 w-[99.578px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16px] text-[#101828] text-[16px] text-nowrap top-[11.5px] whitespace-pre">€984</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26302300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[12.5px] w-[70.984px]" data-name="Button">
      <Icon16 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[45px] text-[#155dfc] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Bewerk</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[50.5px] left-[992.41px] top-0 w-[114.594px]" data-name="Table Cell">
      <Button18 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[50.5px] left-0 top-[102px] w-[1107px]" data-name="Table Row">
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[152.5px] left-0 top-[48.5px] w-[1107px]" data-name="Table Body">
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[201px] relative shrink-0 w-full" data-name="Table">
      <TableHeader1 />
      <TableBody />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white h-[203px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[203px] items-start p-px relative w-full">
          <Table />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[239px] items-start left-[24px] pl-[32px] pr-0 py-0 top-[16.5px] w-[1141px]" data-name="Container">
      <Heading3 />
      <Container18 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute bg-gray-50 h-[272px] left-0 top-0 w-[1189px]" data-name="Table Cell">
      <Container19 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[272px] left-0 top-[93px] w-[1189px]" data-name="Table Row">
      <TableCell29 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[28px] top-[31.5px]" data-name="Button">
      <Icon17 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[76px]" data-name="Table Cell">
      <Button19 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[93px] left-[76px] top-0 w-[162.875px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">BE987654321</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[93px] left-[238.88px] top-0 w-[109.047px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">BELLA</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[93px] left-[347.92px] top-0 w-[143.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Belgian Blue</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[93px] left-[490.95px] top-0 w-[168.25px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">22/08/2019</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[93px] left-[659.2px] top-0 w-[206.188px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">zoogkoe</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[93px] left-[865.39px] top-0 w-[136.094px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Rosie</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[12px] size-[13.125px] top-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.73438 6.5625H10.3906" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
          <path d="M6.5625 2.73438V10.3906" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-[#155dfc] h-[60px] left-[24px] rounded-[4px] top-[16.5px] w-[139.516px]" data-name="Button">
      <Icon18 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[80.59px] text-[16px] text-center text-white top-[4px] translate-x-[-50%] w-[58px]">Nieuwe boeking</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[93px] left-[1001.48px] top-0 w-[187.516px]" data-name="Table Cell">
      <Button20 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[93px] left-0 top-[365px] w-[1189px]" data-name="Table Row">
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[28px] top-[31.5px]" data-name="Button">
      <Icon19 />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[76px]" data-name="Table Cell">
      <Button21 />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[93px] left-[76px] top-0 w-[162.875px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">BE111222333</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[93px] left-[238.88px] top-0 w-[109.047px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">CHARLIE</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[93px] left-[347.92px] top-0 w-[143.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] top-[20.5px] w-[59px]">Holstein Friesian</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[93px] left-[490.95px] top-0 w-[168.25px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">10/05/2021</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[93px] left-[659.2px] top-0 w-[206.188px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">melkkoe</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[93px] left-[865.39px] top-0 w-[136.094px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Daisy</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[12px] size-[13.125px] top-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.73438 6.5625H10.3906" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
          <path d="M6.5625 2.73438V10.3906" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute bg-[#155dfc] h-[60px] left-[24px] rounded-[4px] top-[16.5px] w-[139.516px]" data-name="Button">
      <Icon20 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[80.59px] text-[16px] text-center text-white top-[4px] translate-x-[-50%] w-[58px]">Nieuwe boeking</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[93px] left-[1001.48px] top-0 w-[187.516px]" data-name="Table Cell">
      <Button22 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[93px] left-0 top-[458px] w-[1189px]" data-name="Table Row">
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[28px] top-[31.5px]" data-name="Button">
      <Icon21 />
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[76px]" data-name="Table Cell">
      <Button23 />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[93px] left-[76px] top-0 w-[162.875px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">BE444555666</p>
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[93px] left-[238.88px] top-0 w-[109.047px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">DAISY</p>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[93px] left-[347.92px] top-0 w-[143.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Jersey</p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[93px] left-[490.95px] top-0 w-[168.25px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">05/12/2018</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[93px] left-[659.2px] top-0 w-[206.188px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">melkkoe</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[93px] left-[865.39px] top-0 w-[136.094px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Clara</p>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[12px] size-[13.125px] top-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.73438 6.5625H10.3906" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
          <path d="M6.5625 2.73438V10.3906" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute bg-[#155dfc] h-[60px] left-[24px] rounded-[4px] top-[16.5px] w-[139.516px]" data-name="Button">
      <Icon22 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[80.59px] text-[16px] text-center text-white top-[4px] translate-x-[-50%] w-[58px]">Nieuwe boeking</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[93px] left-[1001.48px] top-0 w-[187.516px]" data-name="Table Cell">
      <Button24 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[93px] left-0 top-[551px] w-[1189px]" data-name="Table Row">
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[28px] top-[31.5px]" data-name="Button">
      <Icon23 />
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[76px]" data-name="Table Cell">
      <Button25 />
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute h-[93px] left-[76px] top-0 w-[162.875px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">BE777888999</p>
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute h-[93px] left-[238.88px] top-0 w-[109.047px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">ELVIS</p>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute h-[93px] left-[347.92px] top-0 w-[143.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Belgian Blue</p>
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute h-[93px] left-[490.95px] top-0 w-[168.25px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">28/01/2020</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute h-[93px] left-[659.2px] top-0 w-[206.188px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">dekstier vleesvee</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute h-[93px] left-[865.39px] top-0 w-[136.094px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Emma</p>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[12px] size-[13.125px] top-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.73438 6.5625H10.3906" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
          <path d="M6.5625 2.73438V10.3906" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute bg-[#155dfc] h-[60px] left-[24px] rounded-[4px] top-[16.5px] w-[139.516px]" data-name="Button">
      <Icon24 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[80.59px] text-[16px] text-center text-white top-[4px] translate-x-[-50%] w-[58px]">Nieuwe boeking</p>
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute h-[93px] left-[1001.48px] top-0 w-[187.516px]" data-name="Table Cell">
      <Button26 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[93px] left-0 top-[644px] w-[1189px]" data-name="Table Row">
      <TableCell54 />
      <TableCell55 />
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
      <TableCell60 />
      <TableCell61 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[28px] top-[31.5px]" data-name="Button">
      <Icon25 />
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[76px]" data-name="Table Cell">
      <Button27 />
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute h-[93px] left-[76px] top-0 w-[162.875px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">BE100200300</p>
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute h-[93px] left-[238.88px] top-0 w-[109.047px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">FLORA</p>
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute h-[93px] left-[347.92px] top-0 w-[143.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] top-[20.5px] w-[59px]">Holstein Friesian</p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute h-[93px] left-[490.95px] top-0 w-[168.25px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">17/09/2019</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute h-[93px] left-[659.2px] top-0 w-[206.188px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">melkkoe</p>
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute h-[93px] left-[865.39px] top-0 w-[136.094px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Fiona</p>
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-[12px] size-[13.125px] top-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.73438 6.5625H10.3906" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
          <path d="M6.5625 2.73438V10.3906" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute bg-[#155dfc] h-[60px] left-[24px] rounded-[4px] top-[16.5px] w-[139.516px]" data-name="Button">
      <Icon26 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[80.59px] text-[16px] text-center text-white top-[4px] translate-x-[-50%] w-[58px]">Nieuwe boeking</p>
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute h-[93px] left-[1001.48px] top-0 w-[187.516px]" data-name="Table Cell">
      <Button28 />
    </div>
  );
}

function TableRow11() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[93px] left-0 top-[737px] w-[1189px]" data-name="Table Row">
      <TableCell62 />
      <TableCell63 />
      <TableCell64 />
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[28px] top-[31.5px]" data-name="Button">
      <Icon27 />
    </div>
  );
}

function TableCell70() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[76px]" data-name="Table Cell">
      <Button29 />
    </div>
  );
}

function TableCell71() {
  return (
    <div className="absolute h-[93px] left-[76px] top-0 w-[162.875px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">BE200300400</p>
    </div>
  );
}

function TableCell72() {
  return (
    <div className="absolute h-[93px] left-[238.88px] top-0 w-[109.047px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">GEORGE</p>
    </div>
  );
}

function TableCell73() {
  return (
    <div className="absolute h-[93px] left-[347.92px] top-0 w-[143.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Limousin</p>
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute h-[93px] left-[490.95px] top-0 w-[168.25px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">03/07/2021</p>
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute h-[93px] left-[659.2px] top-0 w-[206.188px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] top-[20.5px] w-[131px]">mannelijk jongvee zoogkoe</p>
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute h-[93px] left-[865.39px] top-0 w-[136.094px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Greta</p>
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[12px] size-[13.125px] top-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.73438 6.5625H10.3906" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
          <path d="M6.5625 2.73438V10.3906" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
        </g>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute bg-[#155dfc] h-[60px] left-[24px] rounded-[4px] top-[16.5px] w-[139.516px]" data-name="Button">
      <Icon28 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[80.59px] text-[16px] text-center text-white top-[4px] translate-x-[-50%] w-[58px]">Nieuwe boeking</p>
    </div>
  );
}

function TableCell77() {
  return (
    <div className="absolute h-[93px] left-[1001.48px] top-0 w-[187.516px]" data-name="Table Cell">
      <Button30 />
    </div>
  );
}

function TableRow12() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[93px] left-0 top-[830px] w-[1189px]" data-name="Table Row">
      <TableCell70 />
      <TableCell71 />
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
      <TableCell75 />
      <TableCell76 />
      <TableCell77 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button31() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[28px] top-[31.5px]" data-name="Button">
      <Icon29 />
    </div>
  );
}

function TableCell78() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[76px]" data-name="Table Cell">
      <Button31 />
    </div>
  );
}

function TableCell79() {
  return (
    <div className="absolute h-[93px] left-[76px] top-0 w-[162.875px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">BE300400500</p>
    </div>
  );
}

function TableCell80() {
  return (
    <div className="absolute h-[93px] left-[238.88px] top-0 w-[109.047px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">HEIDI</p>
    </div>
  );
}

function TableCell81() {
  return (
    <div className="absolute h-[93px] left-[347.92px] top-0 w-[143.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Jersey</p>
    </div>
  );
}

function TableCell82() {
  return (
    <div className="absolute h-[93px] left-[490.95px] top-0 w-[168.25px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">11/11/2020</p>
    </div>
  );
}

function TableCell83() {
  return (
    <div className="absolute h-[93px] left-[659.2px] top-0 w-[206.188px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">melkkoe</p>
    </div>
  );
}

function TableCell84() {
  return (
    <div className="absolute h-[93px] left-[865.39px] top-0 w-[136.094px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Hannah</p>
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-[12px] size-[13.125px] top-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.73438 6.5625H10.3906" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
          <path d="M6.5625 2.73438V10.3906" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
        </g>
      </svg>
    </div>
  );
}

function Button32() {
  return (
    <div className="absolute bg-[#155dfc] h-[60px] left-[24px] rounded-[4px] top-[16.5px] w-[139.516px]" data-name="Button">
      <Icon30 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[80.59px] text-[16px] text-center text-white top-[4px] translate-x-[-50%] w-[58px]">Nieuwe boeking</p>
    </div>
  );
}

function TableCell85() {
  return (
    <div className="absolute h-[93px] left-[1001.48px] top-0 w-[187.516px]" data-name="Table Cell">
      <Button32 />
    </div>
  );
}

function TableRow13() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[93px] left-0 top-[923px] w-[1189px]" data-name="Table Row">
      <TableCell78 />
      <TableCell79 />
      <TableCell80 />
      <TableCell81 />
      <TableCell82 />
      <TableCell83 />
      <TableCell84 />
      <TableCell85 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button33() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[28px] top-[31.5px]" data-name="Button">
      <Icon31 />
    </div>
  );
}

function TableCell86() {
  return (
    <div className="absolute h-[93px] left-0 top-0 w-[76px]" data-name="Table Cell">
      <Button33 />
    </div>
  );
}

function TableCell87() {
  return (
    <div className="absolute h-[93px] left-[76px] top-0 w-[162.875px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">BE400500600</p>
    </div>
  );
}

function TableCell88() {
  return (
    <div className="absolute h-[93px] left-[238.88px] top-0 w-[109.047px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">IVAN</p>
    </div>
  );
}

function TableCell89() {
  return (
    <div className="absolute h-[93px] left-[347.92px] top-0 w-[143.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Charolais</p>
    </div>
  );
}

function TableCell90() {
  return (
    <div className="absolute h-[93px] left-[490.95px] top-0 w-[168.25px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">25/04/2019</p>
    </div>
  );
}

function TableCell91() {
  return (
    <div className="absolute h-[93px] left-[659.2px] top-0 w-[206.188px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">dekstier vleesvee</p>
    </div>
  );
}

function TableCell92() {
  return (
    <div className="absolute h-[93px] left-[865.39px] top-0 w-[136.094px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Iris</p>
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-[12px] size-[13.125px] top-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.73438 6.5625H10.3906" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
          <path d="M6.5625 2.73438V10.3906" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
        </g>
      </svg>
    </div>
  );
}

function Button34() {
  return (
    <div className="absolute bg-[#155dfc] h-[60px] left-[24px] rounded-[4px] top-[16.5px] w-[139.516px]" data-name="Button">
      <Icon32 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[80.59px] text-[16px] text-center text-white top-[4px] translate-x-[-50%] w-[58px]">Nieuwe boeking</p>
    </div>
  );
}

function TableCell93() {
  return (
    <div className="absolute h-[93px] left-[1001.48px] top-0 w-[187.516px]" data-name="Table Cell">
      <Button34 />
    </div>
  );
}

function TableRow14() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[93px] left-0 top-[1016px] w-[1189px]" data-name="Table Row">
      <TableCell86 />
      <TableCell87 />
      <TableCell88 />
      <TableCell89 />
      <TableCell90 />
      <TableCell91 />
      <TableCell92 />
      <TableCell93 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-[4px] size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button35() {
  return (
    <div className="absolute left-[24px] rounded-[4px] size-[28px] top-[31.5px]" data-name="Button">
      <Icon33 />
    </div>
  );
}

function TableCell94() {
  return (
    <div className="absolute h-[92.5px] left-0 top-0 w-[76px]" data-name="Table Cell">
      <Button35 />
    </div>
  );
}

function TableCell95() {
  return (
    <div className="absolute h-[92.5px] left-[76px] top-0 w-[162.875px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">BE500600700</p>
    </div>
  );
}

function TableCell96() {
  return (
    <div className="absolute h-[92.5px] left-[238.88px] top-0 w-[109.047px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#101828] text-[16px] text-nowrap top-[32.5px] whitespace-pre">JULIA</p>
    </div>
  );
}

function TableCell97() {
  return (
    <div className="absolute h-[92.5px] left-[347.92px] top-0 w-[143.031px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] top-[20.5px] w-[59px]">Holstein Friesian</p>
    </div>
  );
}

function TableCell98() {
  return (
    <div className="absolute h-[92.5px] left-[490.95px] top-0 w-[168.25px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">14/02/2021</p>
    </div>
  );
}

function TableCell99() {
  return (
    <div className="absolute h-[92.5px] left-[659.2px] top-0 w-[206.188px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] top-[20.5px] w-[136px]">vrouwelijk jongvee melkvee</p>
    </div>
  );
}

function TableCell100() {
  return (
    <div className="absolute h-[92.5px] left-[865.39px] top-0 w-[136.094px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px] whitespace-pre">Jane</p>
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute left-[12px] size-[13.125px] top-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.73438 6.5625H10.3906" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
          <path d="M6.5625 2.73438V10.3906" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09375" />
        </g>
      </svg>
    </div>
  );
}

function Button36() {
  return (
    <div className="absolute bg-[#155dfc] h-[60px] left-[24px] rounded-[4px] top-[16.5px] w-[139.516px]" data-name="Button">
      <Icon34 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[80.59px] text-[16px] text-center text-white top-[4px] translate-x-[-50%] w-[58px]">Nieuwe boeking</p>
    </div>
  );
}

function TableCell101() {
  return (
    <div className="absolute h-[92.5px] left-[1001.48px] top-0 w-[187.516px]" data-name="Table Cell">
      <Button36 />
    </div>
  );
}

function TableRow15() {
  return (
    <div className="absolute h-[92.5px] left-0 top-[1109px] w-[1189px]" data-name="Table Row">
      <TableCell94 />
      <TableCell95 />
      <TableCell96 />
      <TableCell97 />
      <TableCell98 />
      <TableCell99 />
      <TableCell100 />
      <TableCell101 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="absolute h-[1201.5px] left-0 top-[72.5px] w-[1189px]" data-name="Table Body">
      <TableRow1 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
      <TableRow10 />
      <TableRow11 />
      <TableRow12 />
      <TableRow13 />
      <TableRow14 />
      <TableRow15 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[1274px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[102.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[102.313px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-2px] w-[103px]">Pagina 1 van 6</p>
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="h-[38px] opacity-50 relative rounded-[4px] shrink-0 w-[71.531px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[38px] relative w-[71.531px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[36px] text-[#364153] text-[16px] text-center text-nowrap top-[5px] translate-x-[-50%] whitespace-pre">Vorige</p>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="bg-[#155dfc] h-[38px] relative rounded-[4px] shrink-0 w-[34.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#155dfc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[38px] relative w-[34.625px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.5px] text-[16px] text-center text-nowrap text-white top-[5px] translate-x-[-50%] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Button39() {
  return (
    <div className="h-[38px] relative rounded-[4px] shrink-0 w-[34.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[38px] relative w-[34.625px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.5px] text-[#364153] text-[16px] text-center text-nowrap top-[5px] translate-x-[-50%] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="h-[38px] relative rounded-[4px] shrink-0 w-[34.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[38px] relative w-[34.625px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.5px] text-[#364153] text-[16px] text-center text-nowrap top-[5px] translate-x-[-50%] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Button41() {
  return (
    <div className="h-[38px] relative rounded-[4px] shrink-0 w-[34.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[38px] relative w-[34.625px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.5px] text-[#364153] text-[16px] text-center text-nowrap top-[5px] translate-x-[-50%] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Button42() {
  return (
    <div className="h-[38px] relative rounded-[4px] shrink-0 w-[34.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[38px] relative w-[34.625px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.5px] text-[#364153] text-[16px] text-center text-nowrap top-[5px] translate-x-[-50%] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Button43() {
  return (
    <div className="h-[38px] relative rounded-[4px] shrink-0 w-[34.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[38px] relative w-[34.625px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[17.5px] text-[#364153] text-[16px] text-center text-nowrap top-[5px] translate-x-[-50%] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function Button44() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[38px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[46.5px] text-[#364153] text-[16px] text-center text-nowrap top-[5px] translate-x-[-50%] whitespace-pre">Volgende</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[38px] relative shrink-0 w-[428.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[38px] items-start relative w-[428.094px]">
        <Button37 />
        <Button38 />
        <Button39 />
        <Button40 />
        <Button41 />
        <Button42 />
        <Button43 />
        <Button44 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[71px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[71px] items-center justify-between pb-0 pt-px px-[24px] relative w-full">
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">Versie: 0.09.03</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[49px] items-start pb-0 pl-[24px] pr-[1065.2px] pt-[13px] relative w-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function AnimalOverview() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1821px] items-start relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="AnimalOverview">
      <Container7 />
      <Container16 />
      <Container17 />
      <Table1 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[1869px] min-h-px min-w-px relative shrink-0" data-name="Main Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[1869px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <AnimalOverview />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1461px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative w-[1461px]">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p17e55d80} fill="var(--fill-0, #FFD700)" id="Vector" />
          <path d={svgPaths.pda57940} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Vlaanderen</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">verbeelding werkt</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[48px] items-start relative w-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[48px] relative shrink-0 w-[166.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[48px] items-center relative w-[166.641px]">
        <Icon35 />
        <Container27 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[24px] relative shrink-0 w-[516.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[516.25px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-nowrap top-[-2px] whitespace-pre">Landbouwvlaanderen.be is een officiële website van de Vlaamse overheid</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[28px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-[123.47px] top-px w-[236.563px]" data-name="Link">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#155dfc] text-[16px] text-nowrap whitespace-pre">Agentschap Landbouw en Visserij</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-2px] w-[124px]">Uitgegeven door</p>
      <Link8 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-gray-100 h-[113px] relative shrink-0 w-[1461px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[113px] items-start pb-0 pt-[17px] px-[24px] relative w-[1461px]">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2082px] items-start left-0 top-0 w-[1461px]" data-name="Layout">
      <Header />
      <Container2 />
      <Container24 />
      <Footer />
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
            <path d={svgPaths.p2ab2d800} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Sidebar1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[1449px] pb-px pt-[5px] px-[5px] rounded-[3.35544e+07px] size-[26px] top-[80px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Icon36 />
    </div>
  );
}

export default function AnimalMovementManagementWizard() {
  return (
    <div className="bg-white relative size-full" data-name="Animal Movement Management Wizard">
      <Layout />
      <Sidebar1 />
    </div>
  );
}