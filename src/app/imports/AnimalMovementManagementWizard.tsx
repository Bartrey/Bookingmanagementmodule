import svgPaths from "./svg-d900zvck8m";

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
    <div className="absolute h-[34px] left-[1765px] top-[12px] w-[200px]" data-name="Container">
      <TextInput />
      <Container />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[gold] h-[59px] relative shrink-0 w-[1989px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5c100] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[59px] relative w-[1989px]">
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
    <div className="bg-[#ffed4e] h-[41px] relative shrink-0 w-[1989px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5d43e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[41px] items-start pb-px pl-[24px] pr-[1881.52px] pt-[9px] relative w-[1989px]">
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
    <div className="absolute h-[40px] left-0 top-0 w-[223px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[32px] text-[#364153] text-[16px] text-nowrap top-[6px] whitespace-pre">Individueel vee</p>
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
    <div className="absolute bg-[#155dfc] h-[40px] left-0 top-0 w-[223px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[32px] text-[16px] text-nowrap text-white top-[6px] whitespace-pre">Veebewegingen individueel</p>
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
    <div className="bg-white h-[1381px] relative shrink-0 w-[224px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[1381px] items-start pl-0 pr-px py-0 relative w-[224px]">
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
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#101828] text-[20px] text-nowrap top-[-3px] whitespace-pre">Veebewegingen individueel</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">Alle boekingen in chronologische volgorde. Dubbelklik op een rij of klik op het chevron icoon om naar het bijhorende dier te navigeren.</p>
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
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-nowrap top-[-2px] whitespace-pre">Handeling</p>
    </div>
  );
}

function Option() {
  return (
    <div className="absolute left-[-272px] size-0 top-[-299px]" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[16px] text-neutral-950 top-0 w-0">Alle</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="absolute left-[-272px] size-0 top-[-299px]" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[16px] text-neutral-950 top-0 w-0">Aankoop</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="absolute left-[-272px] size-0 top-[-299px]" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[16px] text-neutral-950 top-0 w-0">Sterfte</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="absolute left-[-272px] size-0 top-[-299px]" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[16px] text-neutral-950 top-0 w-0">Geboorte</p>
    </div>
  );
}

function Option4() {
  return (
    <div className="absolute left-[-272px] size-0 top-[-299px]" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[16px] text-neutral-950 top-0 w-0">Verkoop</p>
    </div>
  );
}

function Option5() {
  return (
    <div className="absolute left-[-272px] size-0 top-[-299px]" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[16px] text-neutral-950 top-0 w-0">Interne beweging</p>
    </div>
  );
}

function Option6() {
  return (
    <div className="absolute left-[-272px] size-0 top-[-299px]" data-name="Option">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-0 text-[16px] text-neutral-950 top-0 w-0">Overgang</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="h-[41px] relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
      <Option5 />
      <Option6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[70px] items-start left-0 top-0 w-[545.656px]" data-name="Container">
      <Label />
      <Dropdown />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-nowrap top-[-2px] whitespace-pre">Datum van</p>
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

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[70px] items-start left-[561.66px] top-0 w-[545.672px]" data-name="Container">
      <Label1 />
      <DatePicker />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-nowrap top-[-2px] whitespace-pre">Datum tot</p>
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

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[70px] items-start left-[1123.33px] top-0 w-[545.672px]" data-name="Container">
      <Label2 />
      <DatePicker1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[70px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
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

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] h-[42px] items-start relative shrink-0 w-full" data-name="Container">
      <Button12 />
      <Button13 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] h-[144px] items-start px-[24px] py-0 relative w-full">
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col h-[201px] items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button11 />
      <Container13 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-2px] w-[181px]">100 boekingen gevonden</p>
    </div>
  );
}

function Container15() {
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
  return (
    <div className="absolute content-stretch flex h-[36.5px] items-start left-0 px-[12px] py-[8px] top-0 w-[187.391px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Datum</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute content-stretch flex h-[36.5px] items-start left-[187.39px] px-[12px] py-[8px] top-0 w-[260.047px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Handeling</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute content-stretch flex h-[36.5px] items-start left-[447.44px] px-[12px] py-[8px] top-0 w-[211.906px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Gewicht (kg)</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute content-stretch flex h-[36.5px] items-start left-[659.34px] px-[12px] py-[8px] top-0 w-[232.375px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Leeftijd (mnd)</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute content-stretch flex h-[36.5px] items-start left-[891.72px] px-[12px] py-[8px] top-0 w-[146.188px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Waarde</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute content-stretch flex h-[36.5px] items-start left-[1037.91px] px-[12px] py-[8px] top-0 w-[244.844px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Sanitelnummer</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute content-stretch flex h-[36.5px] items-start left-[1282.75px] px-[12px] py-[8px] top-0 w-[143.453px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Naam</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute content-stretch flex h-[36.5px] items-start left-[1426.2px] px-[12px] py-[8px] top-0 w-[246.797px]" data-name="Header Cell">
      <p className="basis-0 font-['Arimo:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Ras</p>
    </div>
  );
}

function HeaderCell8() {
  return <div className="absolute h-[36.5px] left-[1673px] top-0 w-[44px]" data-name="Header Cell" />;
}

function TableRow() {
  return (
    <div className="absolute h-[36.5px] left-0 top-0 w-[1717px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
      <HeaderCell8 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-gray-50 border-[0px_0px_1px] border-gray-200 border-solid h-[36.5px] left-0 top-0 w-[1717px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">22/11/2025</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">aankoop</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">319</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">16.29</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€330</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE515516517</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">BIANCA</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Belgian Blue</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon12 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button14 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-0 w-[1717px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">15/11/2025</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">verkoop</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">582</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">2.56</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€170</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE313314315</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">ZARA</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Holstein Friesian</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon13 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button15 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[42px] w-[1717px]" data-name="Table Row">
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">13/11/2025</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">geboorte</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">294</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">36.56</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€443</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE101102103</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">OSCAR</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Charolais</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon14 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button16 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[84px] w-[1717px]" data-name="Table Row">
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">12/11/2025</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">interne beweging</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">481</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">17.31</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€454</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE313314315</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">ZARA</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Holstein Friesian</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon15 />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button17 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[126px] w-[1717px]" data-name="Table Row">
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">11/11/2025</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">geboorte</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">296</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">59.79</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€988</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE800900100</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">MARCO</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Limousin</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon16 />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button18 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[168px] w-[1717px]" data-name="Table Row">
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">21/10/2025</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">geboorte</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">703</p>
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">2.83</p>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€1072</p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE212213214</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">YVES</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Limousin</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
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
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon17 />
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button19 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[210px] w-[1717px]" data-name="Table Row">
      <TableCell45 />
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

function TableCell54() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">09/10/2025</p>
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">aankoop</p>
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">773</p>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">34.10</p>
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€977</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE929930931</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">OTTO</p>
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Charolais</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon18 />
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button20 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[252px] w-[1717px]" data-name="Table Row">
      <TableCell54 />
      <TableCell55 />
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">08/10/2025</p>
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">interne beweging</p>
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">301</p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">37.91</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€140</p>
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE500600700</p>
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">JULIA</p>
    </div>
  );
}

function TableCell70() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Holstein Friesian</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
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
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon19 />
    </div>
  );
}

function TableCell71() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button21 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[294px] w-[1717px]" data-name="Table Row">
      <TableCell63 />
      <TableCell64 />
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
      <TableCell70 />
      <TableCell71 />
    </div>
  );
}

function TableCell72() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">25/09/2025</p>
    </div>
  );
}

function TableCell73() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">interne beweging</p>
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">354</p>
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">16.85</p>
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€271</p>
    </div>
  );
}

function TableCell77() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE525526527</p>
    </div>
  );
}

function TableCell78() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">KARL</p>
    </div>
  );
}

function TableCell79() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Limousin</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon20 />
    </div>
  );
}

function TableCell80() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button22 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[336px] w-[1717px]" data-name="Table Row">
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
      <TableCell75 />
      <TableCell76 />
      <TableCell77 />
      <TableCell78 />
      <TableCell79 />
      <TableCell80 />
    </div>
  );
}

function TableCell81() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">18/09/2025</p>
    </div>
  );
}

function TableCell82() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">verkoop</p>
    </div>
  );
}

function TableCell83() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">479</p>
    </div>
  );
}

function TableCell84() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">56.34</p>
    </div>
  );
}

function TableCell85() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€1027</p>
    </div>
  );
}

function TableCell86() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE141142143</p>
    </div>
  );
}

function TableCell87() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">ZEUS</p>
    </div>
  );
}

function TableCell88() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Limousin</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
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
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon21 />
    </div>
  );
}

function TableCell89() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button23 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[378px] w-[1717px]" data-name="Table Row">
      <TableCell81 />
      <TableCell82 />
      <TableCell83 />
      <TableCell84 />
      <TableCell85 />
      <TableCell86 />
      <TableCell87 />
      <TableCell88 />
      <TableCell89 />
    </div>
  );
}

function TableCell90() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">15/09/2025</p>
    </div>
  );
}

function TableCell91() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">geboorte</p>
    </div>
  );
}

function TableCell92() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">654</p>
    </div>
  );
}

function TableCell93() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">56.34</p>
    </div>
  );
}

function TableCell94() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€1015</p>
    </div>
  );
}

function TableCell95() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE111112113</p>
    </div>
  );
}

function TableCell96() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">XENA</p>
    </div>
  );
}

function TableCell97() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Jersey</p>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon22 />
    </div>
  );
}

function TableCell98() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button24 />
    </div>
  );
}

function TableRow11() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[420px] w-[1717px]" data-name="Table Row">
      <TableCell90 />
      <TableCell91 />
      <TableCell92 />
      <TableCell93 />
      <TableCell94 />
      <TableCell95 />
      <TableCell96 />
      <TableCell97 />
      <TableCell98 />
    </div>
  );
}

function TableCell99() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">09/09/2025</p>
    </div>
  );
}

function TableCell100() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">geboorte</p>
    </div>
  );
}

function TableCell101() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">142</p>
    </div>
  );
}

function TableCell102() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">29.37</p>
    </div>
  );
}

function TableCell103() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€913</p>
    </div>
  );
}

function TableCell104() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE919920921</p>
    </div>
  );
}

function TableCell105() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">FRIDA</p>
    </div>
  );
}

function TableCell106() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Jersey</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
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
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon23 />
    </div>
  );
}

function TableCell107() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button25 />
    </div>
  );
}

function TableRow12() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[462px] w-[1717px]" data-name="Table Row">
      <TableCell99 />
      <TableCell100 />
      <TableCell101 />
      <TableCell102 />
      <TableCell103 />
      <TableCell104 />
      <TableCell105 />
      <TableCell106 />
      <TableCell107 />
    </div>
  );
}

function TableCell108() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">07/09/2025</p>
    </div>
  );
}

function TableCell109() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">sterfte</p>
    </div>
  );
}

function TableCell110() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">570</p>
    </div>
  );
}

function TableCell111() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">7.19</p>
    </div>
  );
}

function TableCell112() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€1060</p>
    </div>
  );
}

function TableCell113() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE505506507</p>
    </div>
  );
}

function TableCell114() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">SIMON</p>
    </div>
  );
}

function TableCell115() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Limousin</p>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon24 />
    </div>
  );
}

function TableCell116() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button26 />
    </div>
  );
}

function TableRow13() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[504px] w-[1717px]" data-name="Table Row">
      <TableCell108 />
      <TableCell109 />
      <TableCell110 />
      <TableCell111 />
      <TableCell112 />
      <TableCell113 />
      <TableCell114 />
      <TableCell115 />
      <TableCell116 />
    </div>
  );
}

function TableCell117() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">20/07/2025</p>
    </div>
  );
}

function TableCell118() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">aankoop</p>
    </div>
  );
}

function TableCell119() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">268</p>
    </div>
  );
}

function TableCell120() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">35.84</p>
    </div>
  );
}

function TableCell121() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€861</p>
    </div>
  );
}

function TableCell122() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE626627628</p>
    </div>
  );
}

function TableCell123() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">LUNA</p>
    </div>
  );
}

function TableCell124() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Holstein Friesian</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
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
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon25 />
    </div>
  );
}

function TableCell125() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button27 />
    </div>
  );
}

function TableRow14() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[546px] w-[1717px]" data-name="Table Row">
      <TableCell117 />
      <TableCell118 />
      <TableCell119 />
      <TableCell120 />
      <TableCell121 />
      <TableCell122 />
      <TableCell123 />
      <TableCell124 />
      <TableCell125 />
    </div>
  );
}

function TableCell126() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">19/07/2025</p>
    </div>
  );
}

function TableCell127() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">aankoop</p>
    </div>
  );
}

function TableCell128() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">682</p>
    </div>
  );
}

function TableCell129() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">4.37</p>
    </div>
  );
}

function TableCell130() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€252</p>
    </div>
  );
}

function TableCell131() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE515516517</p>
    </div>
  );
}

function TableCell132() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">BIANCA</p>
    </div>
  );
}

function TableCell133() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Belgian Blue</p>
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon26 />
    </div>
  );
}

function TableCell134() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button28 />
    </div>
  );
}

function TableRow15() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[588px] w-[1717px]" data-name="Table Row">
      <TableCell126 />
      <TableCell127 />
      <TableCell128 />
      <TableCell129 />
      <TableCell130 />
      <TableCell131 />
      <TableCell132 />
      <TableCell133 />
      <TableCell134 />
    </div>
  );
}

function TableCell135() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">20/06/2025</p>
    </div>
  );
}

function TableCell136() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">interne beweging</p>
    </div>
  );
}

function TableCell137() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">452</p>
    </div>
  );
}

function TableCell138() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">41.49</p>
    </div>
  );
}

function TableCell139() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€723</p>
    </div>
  );
}

function TableCell140() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE400500600</p>
    </div>
  );
}

function TableCell141() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">IVAN</p>
    </div>
  );
}

function TableCell142() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Charolais</p>
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
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
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon27 />
    </div>
  );
}

function TableCell143() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button29 />
    </div>
  );
}

function TableRow16() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[630px] w-[1717px]" data-name="Table Row">
      <TableCell135 />
      <TableCell136 />
      <TableCell137 />
      <TableCell138 />
      <TableCell139 />
      <TableCell140 />
      <TableCell141 />
      <TableCell142 />
      <TableCell143 />
    </div>
  );
}

function TableCell144() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">16/06/2025</p>
    </div>
  );
}

function TableCell145() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">interne beweging</p>
    </div>
  );
}

function TableCell146() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">730</p>
    </div>
  );
}

function TableCell147() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">6.34</p>
    </div>
  );
}

function TableCell148() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€363</p>
    </div>
  );
}

function TableCell149() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE414415416</p>
    </div>
  );
}

function TableCell150() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">ADAM</p>
    </div>
  );
}

function TableCell151() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Charolais</p>
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon28 />
    </div>
  );
}

function TableCell152() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button30 />
    </div>
  );
}

function TableRow17() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[672px] w-[1717px]" data-name="Table Row">
      <TableCell144 />
      <TableCell145 />
      <TableCell146 />
      <TableCell147 />
      <TableCell148 />
      <TableCell149 />
      <TableCell150 />
      <TableCell151 />
      <TableCell152 />
    </div>
  );
}

function TableCell153() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">27/05/2025</p>
    </div>
  );
}

function TableCell154() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">overgang</p>
    </div>
  );
}

function TableCell155() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">130</p>
    </div>
  );
}

function TableCell156() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">49.93</p>
    </div>
  );
}

function TableCell157() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€312</p>
    </div>
  );
}

function TableCell158() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE737738739</p>
    </div>
  );
}

function TableCell159() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">VIOLET</p>
    </div>
  );
}

function TableCell160() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Jersey</p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
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
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon29 />
    </div>
  );
}

function TableCell161() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button31 />
    </div>
  );
}

function TableRow18() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[714px] w-[1717px]" data-name="Table Row">
      <TableCell153 />
      <TableCell154 />
      <TableCell155 />
      <TableCell156 />
      <TableCell157 />
      <TableCell158 />
      <TableCell159 />
      <TableCell160 />
      <TableCell161 />
    </div>
  );
}

function TableCell162() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">22/05/2025</p>
    </div>
  );
}

function TableCell163() {
  return (
    <div className="absolute h-[42px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">aankoop</p>
    </div>
  );
}

function TableCell164() {
  return (
    <div className="absolute h-[42px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">307</p>
    </div>
  );
}

function TableCell165() {
  return (
    <div className="absolute h-[42px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">63.96</p>
    </div>
  );
}

function TableCell166() {
  return (
    <div className="absolute h-[42px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€463</p>
    </div>
  );
}

function TableCell167() {
  return (
    <div className="absolute h-[42px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE131132133</p>
    </div>
  );
}

function TableCell168() {
  return (
    <div className="absolute h-[42px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">PETRA</p>
    </div>
  );
}

function TableCell169() {
  return (
    <div className="absolute h-[42px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Holstein Friesian</p>
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button32() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon30 />
    </div>
  );
}

function TableCell170() {
  return (
    <div className="absolute h-[42px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button32 />
    </div>
  );
}

function TableRow19() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-100 border-solid h-[42px] left-0 top-[756px] w-[1717px]" data-name="Table Row">
      <TableCell162 />
      <TableCell163 />
      <TableCell164 />
      <TableCell165 />
      <TableCell166 />
      <TableCell167 />
      <TableCell168 />
      <TableCell169 />
      <TableCell170 />
    </div>
  );
}

function TableCell171() {
  return (
    <div className="absolute h-[41.5px] left-0 top-0 w-[187.391px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">20/05/2025</p>
    </div>
  );
}

function TableCell172() {
  return (
    <div className="absolute h-[41.5px] left-[187.39px] top-0 w-[260.047px]" data-name="Table Cell">
      <p className="absolute capitalize font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">overgang</p>
    </div>
  );
}

function TableCell173() {
  return (
    <div className="absolute h-[41.5px] left-[447.44px] top-0 w-[211.906px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">465</p>
    </div>
  );
}

function TableCell174() {
  return (
    <div className="absolute h-[41.5px] left-[659.34px] top-0 w-[232.375px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">17.15</p>
    </div>
  );
}

function TableCell175() {
  return (
    <div className="absolute h-[41.5px] left-[891.72px] top-0 w-[146.188px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">€496</p>
    </div>
  );
}

function TableCell176() {
  return (
    <div className="absolute h-[41.5px] left-[1037.91px] top-0 w-[244.844px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">BE242243244</p>
    </div>
  );
}

function TableCell177() {
  return (
    <div className="absolute h-[41.5px] left-[1282.75px] top-0 w-[143.453px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#101828] text-[14px] text-nowrap top-[9px] whitespace-pre">AMBER</p>
    </div>
  );
}

function TableCell178() {
  return (
    <div className="absolute h-[41.5px] left-[1426.2px] top-0 w-[246.797px]" data-name="Table Cell">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#4a5565] text-[14px] text-nowrap top-[9px] whitespace-pre">Jersey</p>
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
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
    <div className="absolute left-[12px] size-[20px] top-[8.5px]" data-name="Button">
      <Icon31 />
    </div>
  );
}

function TableCell179() {
  return (
    <div className="absolute h-[41.5px] left-[1673px] top-0 w-[44px]" data-name="Table Cell">
      <Button33 />
    </div>
  );
}

function TableRow20() {
  return (
    <div className="absolute h-[41.5px] left-0 top-[798px] w-[1717px]" data-name="Table Row">
      <TableCell171 />
      <TableCell172 />
      <TableCell173 />
      <TableCell174 />
      <TableCell175 />
      <TableCell176 />
      <TableCell177 />
      <TableCell178 />
      <TableCell179 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[839.5px] left-0 top-[36.5px] w-[1717px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
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
      <TableRow16 />
      <TableRow17 />
      <TableRow18 />
      <TableRow19 />
      <TableRow20 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[876px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[187px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[187px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-2px] w-[187px]">Pagina 1 van 5 (100 totaal)</p>
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="h-[34px] opacity-50 relative rounded-[4px] shrink-0 w-[65.844px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[34px] items-start px-[13px] py-[7px] relative w-[65.844px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap whitespace-pre">Vorige</p>
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="bg-[#155dfc] h-[34px] relative rounded-[4px] shrink-0 w-[33.547px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#155dfc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[34px] items-start px-[13px] py-[7px] relative w-[33.547px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="h-[34px] relative rounded-[4px] shrink-0 w-[33.547px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[34px] items-start px-[13px] py-[7px] relative w-[33.547px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="h-[34px] relative rounded-[4px] shrink-0 w-[33.547px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[34px] items-start px-[13px] py-[7px] relative w-[33.547px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="h-[34px] relative rounded-[4px] shrink-0 w-[33.547px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[34px] items-start px-[13px] py-[7px] relative w-[33.547px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Button39() {
  return (
    <div className="h-[34px] relative rounded-[4px] shrink-0 w-[33.547px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[34px] items-start px-[13px] py-[7px] relative w-[33.547px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="basis-0 grow h-[34px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[34px] items-start px-[13px] py-[7px] relative w-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap whitespace-pre">Volgende</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[34px] relative shrink-0 w-[366.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[34px] items-start relative w-[366.047px]">
        <Button34 />
        <Button35 />
        <Button36 />
        <Button37 />
        <Button38 />
        <Button39 />
        <Button40 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[67px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[67px] items-center justify-between pb-0 pt-px px-[24px] relative w-full">
          <Container16 />
          <Container17 />
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

function Container19() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[49px] items-start pb-0 pl-[24px] pr-[1593.2px] pt-[13px] relative w-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function BookingOverview() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1333px] items-start relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="BookingOverview">
      <Container7 />
      <Container14 />
      <Container15 />
      <Table />
      <Container18 />
      <Container19 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[1381px] min-h-px min-w-px relative shrink-0" data-name="Main Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[1381px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <BookingOverview />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative w-[1989px]">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

function Icon32() {
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

function Container21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Vlaanderen</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">verbeelding werkt</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[48px] items-start relative w-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[48px] relative shrink-0 w-[166.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[48px] items-center relative w-[166.641px]">
        <Icon32 />
        <Container23 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[24px] relative shrink-0 w-[516.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[516.25px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] text-nowrap top-[-2px] whitespace-pre">Landbouwvlaanderen.be is een officiële website van de Vlaamse overheid</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[28px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
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

function Container27() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-2px] w-[124px]">Uitgegeven door</p>
      <Link8 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-gray-100 h-[113px] relative shrink-0 w-[1989px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[113px] items-start pb-0 pt-[17px] px-[24px] relative w-[1989px]">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1594px] items-start left-0 top-0 w-[1989px]" data-name="Layout">
      <Header />
      <Container2 />
      <Container20 />
      <Footer />
    </div>
  );
}

function Icon33() {
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
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[1977px] pb-px pt-[5px] px-[5px] rounded-[3.35544e+07px] size-[26px] top-[80px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Icon33 />
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