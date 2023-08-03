import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { ReactElement } from "react";
import Footer from "../components/footer.component";
import Menu from "../components/menu";


interface IDefaultLayout {
  children: ReactElement;
}

export default function DefaultLayout({ children }: IDefaultLayout) {

  const router = useRouter();
  const [url, setUrl] = useState<string>(router.pathname);
  const excludedHeaderUrls = ['/'];
  const excludedFooterUrls = ['/build', '/experience', '/invest', '/soon'];

  useEffect(() => {
    const routeChanged = (url: string) => {
      setUrl(url);
    }
    router.events.on('routeChangeStart', routeChanged);
    return () => {
      router.events.off('routeChangeStart', routeChanged);
    }
  }, [])

  return (
    <>
      <header>
        {
          !excludedHeaderUrls.includes(url) && <Menu />
        }
      </header>
      <main className="font-work">
        {children}
      </main>
      <footer className="mb-20">
        {
          !excludedFooterUrls.includes(url) && <Footer />
        }
      </footer>
    </>
  )
}