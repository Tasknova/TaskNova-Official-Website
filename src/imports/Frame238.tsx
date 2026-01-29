import imgLogo011 from "@/assets/e541048f99dfa2fabc008ea176597ded8a8c5680.png";
import imgImageTasknova from "@/assets/cbbe450546bcb443dc57fc994b80af8011498c1d.png";

// Navigation Menu
function NavigationMenu() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[28px] items-center leading-[20px] left-1/2 not-italic text-[#070563] text-[14px] top-1/2 tracking-[-0.1504px]">
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] relative shrink-0">How It Works</p>
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] relative shrink-0">{`Performance & Coaching`}</p>
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] relative shrink-0">Platform</p>
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] relative shrink-0">Use Cases</p>
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] relative shrink-0">Book a Demo</p>
    </div>
  );
}

// Get Started Button
function GetStartedButton() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#155dfc] h-[36px] items-center justify-center left-[904px] px-[20px] py-[8px] rounded-[10px] shadow-[0px_10px_15px_0px_rgba(43,127,255,0.2),0px_4px_6px_0px_rgba(43,127,255,0.2)] to-[#2b7fff] top-[18px] w-[139px]" data-name="Button">
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.1504px]">Get Started</p>
    </div>
  );
}

// Header Navigation
function Header() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[72px] left-1/2 overflow-clip top-0 w-[1071px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[39px] left-[calc(50%-428.5px)] top-[calc(50%+0.5px)] w-[136px]" data-name="LOGO-01 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo011} />
      </div>
      <NavigationMenu />
      <GetStartedButton />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[152px] top-[160px] w-[768px]">
      <div className="bg-[rgba(233,233,233,0.1)] h-[38px] relative rounded-[16777200px] shrink-0 w-[320px]" data-name="Container">
        <div aria-hidden="true" className="absolute border border-[rgba(43,127,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Poppins:Regular',sans-serif] leading-[20px] left-1/2 not-italic text-[#f4f4f5] text-[14px] text-center top-[9px] tracking-[-0.1504px]">See Tasknova in Action</p>
      </div>
      <p className="css-4hzbpn font-['Poppins:SemiBold',sans-serif] leading-[75px] min-w-full not-italic relative shrink-0 text-[60px] text-center text-white tracking-[0.2637px] w-[min-content]">Book Your Demo</p>
      <div className="h-[98px] relative shrink-0 w-full" data-name="Paragraph">
        <p className="-translate-x-1/2 absolute css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[32.5px] left-[384px] not-italic text-[#f4f4f5] text-[20px] text-center top-[-0.5px] tracking-[-0.4492px] w-[674px]">{`Discover how Tasknova's AI-powered coaching platform transforms sales performance. Get a personalized walkthrough tailored to your team's needs.`}</p>
      </div>
    </div>
  );
}

// Form Input Field Component
function FormInput({ label, placeholder, top, required = true }: { label: string; placeholder: string; top: number; required?: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] left-[48px] w-[975px]" style={{ top: `${top}px` }}>
      <p className="css-ew64yg font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#070563] text-[16px] tracking-[-0.3125px]">
        {label}{required && <span className="text-[#2b7fff]">*</span>}
      </p>
      <div className="bg-white h-[52px] relative rounded-[10px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[rgba(7,5,99,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <input
          type="text"
          placeholder={placeholder}
          className="absolute inset-0 bg-transparent px-[20px] py-[14px] css-ew64yg font-['Poppins:Regular',sans-serif] text-[16px] text-[#070563] tracking-[-0.3125px] outline-none placeholder:text-[rgba(7,5,99,0.4)]"
        />
      </div>
    </div>
  );
}

// Form Textarea Field Component
function FormTextarea({ label, placeholder, top, required = false }: { label: string; placeholder: string; top: number; required?: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] left-[48px] w-[975px]" style={{ top: `${top}px` }}>
      <p className="css-ew64yg font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#070563] text-[16px] tracking-[-0.3125px]">
        {label}{required && <span className="text-[#2b7fff]">*</span>}
      </p>
      <div className="bg-white h-[120px] relative rounded-[10px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[rgba(7,5,99,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <textarea
          placeholder={placeholder}
          className="absolute inset-0 bg-transparent px-[20px] py-[14px] css-ew64yg font-['Poppins:Regular',sans-serif] text-[16px] text-[#070563] tracking-[-0.3125px] outline-none resize-none placeholder:text-[rgba(7,5,99,0.4)]"
        />
      </div>
    </div>
  );
}

// Submit Button
function SubmitButton() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#155dfc] h-[52px] items-center justify-center left-[48px] px-[40px] py-[16px] rounded-[10px] shadow-[0px_10px_15px_0px_rgba(43,127,255,0.2),0px_4px_6px_0px_rgba(43,127,255,0.2)] to-[#2b7fff] top-[872px] w-[240px]" data-name="Submit Button">
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.3516px]">Submit Request</p>
    </div>
  );
}

// Demo Form Section
function DemoFormSection() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col left-[24px] rounded-[20px] top-[560px] w-[1023px]" style={{ height: "962px" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(7,5,99,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start relative size-full pt-[48px] pb-[48px]">
        <p className="absolute css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[40px] left-[48px] not-italic text-[#070563] text-[32px] top-[48px] tracking-[-0.625px]">Let's Connect</p>
        <p className="absolute css-ew64yg font-['Poppins:Regular',sans-serif] leading-[26px] left-[48px] not-italic text-[rgba(7,5,99,0.7)] text-[16px] top-[96px] tracking-[-0.3125px] w-[800px]">Fill out the form below and our team will reach out to schedule a personalized demo of Tasknova.</p>
        
        <FormInput label="Full Name" placeholder="Enter your full name" top={160} />
        <FormInput label="Work Email" placeholder="your.email@company.com" top={264} />
        <FormInput label="Company Name" placeholder="Your company name" top={368} />
        <FormInput label="Role" placeholder="e.g., Sales Manager, VP of Sales" top={472} />
        <FormInput label="Phone Number" placeholder="+1 (555) 000-0000" top={576} required={false} />
        <FormTextarea label="Use Case / Message" placeholder="Tell us about your team and what you'd like to achieve with Tasknova" top={680} />
        
        <SubmitButton />
      </div>
    </div>
  );
}

// Trust Section with Social Proof
function TrustSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[152px] top-[1616px] w-[768px]">
      <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[32px] text-center text-white tracking-[-0.625px]">Trusted by Revenue Teams</p>
      <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[29.25px] not-italic relative shrink-0 text-[18px] text-center text-[rgba(255,255,255,0.9)] tracking-[-0.4395px] w-[674px]">Join hundreds of sales teams using Tasknova to drive performance, coach effectively, and close more deals.</p>
      
      <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full pt-[24px]">
        <div className="bg-white/10 content-stretch flex flex-col gap-[16px] h-[140px] items-center justify-center px-[32px] py-[24px] rounded-[14px] w-[240px]">
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[40px] text-center text-white tracking-[0.2637px]">95%</p>
          <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-[rgba(255,255,255,0.8)] tracking-[-0.1504px]">Customer Satisfaction</p>
        </div>
        <div className="bg-white/10 content-stretch flex flex-col gap-[16px] h-[140px] items-center justify-center px-[32px] py-[24px] rounded-[14px] w-[240px]">
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[40px] text-center text-white tracking-[0.2637px]">30%</p>
          <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-[rgba(255,255,255,0.8)] tracking-[-0.1504px]">Average Revenue Lift</p>
        </div>
        <div className="bg-white/10 content-stretch flex flex-col gap-[16px] h-[140px] items-center justify-center px-[32px] py-[24px] rounded-[14px] w-[240px]">
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[40px] text-center text-white tracking-[0.2637px]">500+</p>
          <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-[rgba(255,255,255,0.8)] tracking-[-0.1504px]">Companies Worldwide</p>
        </div>
      </div>
    </div>
  );
}

// Footer Component (reusing existing structure)
function Link14() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(7,5,99,0.7)] top-[0.5px] tracking-[-0.1504px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(7,5,99,0.7)] top-[0.5px] tracking-[-0.1504px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[87.008px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(7,5,99,0.7)] top-[0.5px] tracking-[-0.1504px]">Cookie Policy</p>
      </div>
    </div>
  );
}

function FooterLogo() {
  return (
    <div className="h-[39px] relative shrink-0 w-[136px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo011} />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[180px]">
        <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#070563] text-[16px] tracking-[-0.3125px]">Product</p>
        <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(7,5,99,0.7)] tracking-[-0.1504px]">How It Works</p>
        <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(7,5,99,0.7)] tracking-[-0.1504px]">Performance</p>
        <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(7,5,99,0.7)] tracking-[-0.1504px]">Platform</p>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[180px]">
        <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#070563] text-[16px] tracking-[-0.3125px]">Company</p>
        <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(7,5,99,0.7)] tracking-[-0.1504px]">About Us</p>
        <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(7,5,99,0.7)] tracking-[-0.1504px]">Careers</p>
        <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(7,5,99,0.7)] tracking-[-0.1504px]">Contact</p>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[180px]">
        <p className="css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#070563] text-[16px] tracking-[-0.3125px]">Resources</p>
        <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(7,5,99,0.7)] tracking-[-0.1504px]">Use Cases</p>
        <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(7,5,99,0.7)] tracking-[-0.1504px]">Pricing</p>
        <p className="css-ew64yg font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(7,5,99,0.7)] tracking-[-0.1504px]">Blog</p>
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[20px] relative shrink-0 w-[377.117px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(7,5,99,0.7)] top-[0.5px] tracking-[-0.1504px]">{`© 2024 Tasknova. All rights reserved.`}</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[20px] relative shrink-0 w-[332.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Link14 />
        <Link15 />
        <Link16 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex h-[53px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(28,57,142,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph31 />
      <Container77 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <FooterLogo />
      <FooterLinks />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[269px] items-start relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container78 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#f4f4f5] h-[398px] left-0 top-[2080px] w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(28,57,142,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[65px] px-[24px] relative size-full">
        <Container79 />
      </div>
    </div>
  );
}

// Main Container
function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[72px] w-[1071px]">
      <HeroSection />
      <DemoFormSection />
      <TrustSection />
      <Footer />
    </div>
  );
}

// Main Export
export default function Frame238() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(266.405deg, rgb(47, 213, 191) 2.2671%, rgb(1, 102, 250) 94.289%)" }}>
      <Header />
      <MainContent />
    </div>
  );
}