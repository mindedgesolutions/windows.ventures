'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

type WebsiteMenuProp = {
  scrolled: boolean;
};

export default function Menu({ scrolled }: WebsiteMenuProp) {
  const submenuClasses = scrolled
    ? {
        item: 'text-primary hover:bg-muted',
      }
    : {
        item: 'text-card hover:bg-card/20',
      };
  const pathname = usePathname();
  console.log(pathname);

  return (
    <NavigationMenu className="font-inter">
      <NavigationMenuList>
        <NavigationMenuItem className="relative flex justify-center items-center group/home">
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              'px-4 hover:text-primary-foreground tracking-wider',
              scrolled ? 'text-primary' : 'text-card',
            )}
            render={<Link href="/">Home</Link>}
          />
          <span
            className={cn(
              'absolute -bottom-4 h-0.5 w-6 bg-card',
              pathname === '/'
                ? 'scale-x-100'
                : 'scale-x-0 transition-transform duration-200 group-hover/home:scale-x-100',
            )}
          />
        </NavigationMenuItem>
        <NavigationMenuItem className="relative flex justify-center items-center group/about">
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              'px-4 hover:text-primary-foreground tracking-wider',
              scrolled ? 'text-primary' : 'text-card',
            )}
            render={<Link href="/about">About</Link>}
          />
          <span
            className={cn(
              'absolute -bottom-4 h-0.5 w-6 bg-card',
              pathname === '/about'
                ? 'scale-x-100'
                : 'scale-x-0 transition-transform duration-200 group-hover/about:scale-x-100',
            )}
          />
        </NavigationMenuItem>

        <NavigationMenuItem className="relative flex justify-center items-center group/services">
          <NavigationMenuTrigger
            className={`px-4 hover:text-primary-foreground tracking-wider ${scrolled ? 'text-primary data-open:focus:text-primary' : 'text-card data-open:focus:text-card'}`}
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent scrolled={scrolled} className="p-3">
            <ul className="w-96 font-inter">
              <ListItem
                className={cn(
                  'block rounded-md tracking-wider transition-colors py-2',
                  submenuClasses.item,
                )}
                href="/services/career-readiness"
                title="Career Readiness"
              >
                <span
                  className={`text-xs ${scrolled ? 'text-primary/50' : 'text-muted/50'}`}
                >
                  Re-usable components built with Tailwind CSS.
                </span>
              </ListItem>
              <ListItem
                className={cn(
                  'block rounded-md tracking-wider transition-colors py-2',
                  submenuClasses.item,
                )}
                href="/services/import-export"
                title="Import & Export"
              >
                <span
                  className={`text-xs ${scrolled ? 'text-primary/50' : 'text-muted/50'}`}
                >
                  Re-usable components built with Tailwind CSS.
                </span>
              </ListItem>
              <ListItem
                className={cn(
                  'block rounded-md tracking-wider transition-colors py-2',
                  submenuClasses.item,
                )}
                href="/services/web-development"
                title="Web Development"
              >
                <span
                  className={`text-xs ${scrolled ? 'text-primary/50' : 'text-muted/50'}`}
                >
                  Re-usable components built with Tailwind CSS.
                </span>
              </ListItem>
            </ul>
          </NavigationMenuContent>
          <span
            className={cn(
              'absolute -bottom-4 h-0.5 w-6 bg-card',
              pathname.includes('services')
                ? 'scale-x-100'
                : 'scale-x-0 transition-transform duration-200 group-hover/services:scale-x-100',
            )}
          />
        </NavigationMenuItem>

        <NavigationMenuItem className="relative flex justify-center items-center group/products">
          <NavigationMenuTrigger
            className={`px-4 hover:text-primary-foreground tracking-wider ${scrolled ? 'text-primary data-open:focus:text-primary' : 'text-card data-open:focus:text-card'}`}
          >
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent scrolled={scrolled} className="p-3">
            <ul className="w-96 font-inter">
              <ListItem
                className={cn(
                  'block rounded-md tracking-wider transition-colors py-2',
                  submenuClasses.item,
                )}
                href="/products/cyber-solution"
                title="Cyber Solutions"
              >
                <span
                  className={`text-xs ${scrolled ? 'text-primary/50' : 'text-muted/50'}`}
                >
                  Re-usable components built with Tailwind CSS.
                </span>
              </ListItem>
              <ListItem
                className={cn(
                  'block rounded-md tracking-wider transition-colors py-2',
                  submenuClasses.item,
                )}
                href="/products/kids-play"
                title="Kids Play"
              >
                <span
                  className={`text-xs ${scrolled ? 'text-primary/50' : 'text-muted/50'}`}
                >
                  Re-usable components built with Tailwind CSS.
                </span>
              </ListItem>
            </ul>
          </NavigationMenuContent>
          <span
            className={cn(
              'absolute -bottom-4 h-0.5 w-6 bg-card',
              pathname.includes('products')
                ? 'scale-x-100'
                : 'scale-x-0 transition-transform duration-200 group-hover/products:scale-x-100',
            )}
          />
        </NavigationMenuItem>

        <NavigationMenuItem className="relative flex justify-center items-center group/contactus">
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              'px-4 hover:text-primary-foreground tracking-wider',
              scrolled ? 'text-primary' : 'text-card',
            )}
            render={<Link href="/contact-us">Contact</Link>}
          />
          <span
            className={cn(
              'absolute -bottom-4 h-0.5 w-6 bg-card',
              pathname.includes('contact-us')
                ? 'scale-x-100'
                : 'scale-x-0 transition-transform duration-200 group-hover/contactus:scale-x-100',
            )}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
