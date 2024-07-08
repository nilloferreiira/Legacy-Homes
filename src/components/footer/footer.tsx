import { FooterHeader } from './footer-header'
import { FooterSection } from './footer-section'

export function Footer() {
  return (
    // Footer background Image
    <div className="w-full md:h-[397px] bg-footer-bg bg-cover bg-center bg-no-repeat md:min-h-full">
      {/* footer Container */}
      <div
        id="contact"
        className="w-full md:h-full bg-zinc-900/80 text-white flex flex-col items-center justify-center md:flex-row md:items-start mx-auto gap-5 px-8 md:px-16 lg:px-32 py-8 md:py-10 lg:py-12 2xl:py-20"
      >
        {/* footer header */}
        <FooterHeader />
        {/* footer content  */}
        <div className="w-full grid grid-cols-2 gap-5 md:flex md:items-center md:justify-center mx-auto place-items-center">
          <FooterSection
            links={[
              {
                name: 'menu',
                href: '#',
              },
              {
                name: 'Features',
                href: '#',
              },
              {
                name: 'News & Blogs',
                href: '#',
              },
              {
                name: 'Help & Supports',
                href: '#',
              },
            ]}
          >
            About us
          </FooterSection>
          <FooterSection
            links={[
              {
                name: 'How we work',
                href: '#',
              },
              {
                name: 'Terms of service',
                href: '#',
              },
              {
                name: 'Pricing',
                href: '#',
              },
              {
                name: 'FAQ',
                href: '#',
              },
            ]}
          >
            Company
          </FooterSection>
          <div className="col-span-2 flex items-center justify-center">
            <FooterSection
              links={[
                {
                  name: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
                  href: null,
                },
                {
                  name: '+1 202-918-2132',
                  href: null,
                },
                {
                  name: 'legacyhomes@mail.com',
                  href: 'mailto:legacyhomes@mail.com',
                },
              ]}
            >
              Contact Us
            </FooterSection>
          </div>
        </div>
      </div>
    </div>
  )
}
