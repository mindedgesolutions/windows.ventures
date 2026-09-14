'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { menus } from '@/constants/menu';
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
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <NavigationMenu className="font-inter">
      <NavigationMenuList>
        {menus.map((menu) => {
          const isActive = menu.submenus?.length
            ? pathname.startsWith(`/${menu.pathname}`)
            : pathname === menu.link;
          const isHovered = hoveredMenu === menu.id;

          return (
            <NavigationMenuItem
              key={menu.id}
              className={`relative flex justify-center items-center group`}
              onMouseEnter={() => setHoveredMenu(menu.id)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              {menu.submenus && menu.submenus?.length > 0 ? (
                <>
                  <NavigationMenuTrigger
                    className={`px-4 hover:text-primary-foreground tracking-wider ${scrolled ? 'text-primary data-open:focus:text-primary' : 'text-card data-open:focus:text-card'}`}
                  >
                    {menu.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent scrolled={scrolled} className="p-3">
                    <ul className="w-96 font-inter">
                      {menu.submenus.map((submenu) => (
                        <ListItem
                          key={submenu.id}
                          className={cn(
                            'block rounded-md tracking-wider transition-colors py-2',
                            submenuClasses.item,
                          )}
                          href={submenu.link}
                          title={submenu.title}
                        >
                          {submenu.msg && (
                            <span
                              className={`text-xs ${scrolled ? 'text-primary/50' : 'text-muted/50'}`}
                            >
                              {submenu.msg}
                            </span>
                          )}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                  <span
                    className={cn(
                      'absolute -bottom-4 h-0.5 w-6 origin-center transform bg-card transition-transform duration-300 ease-out',
                      isActive || isHovered ? 'scale-x-100' : `scale-x-0`,
                    )}
                  />
                </>
              ) : (
                <>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'px-4 hover:text-primary-foreground tracking-wider',
                      scrolled ? 'text-primary' : 'text-card',
                    )}
                    render={<Link href={menu.link}>{menu.title}</Link>}
                  />
                  <span
                    className={cn(
                      'absolute -bottom-4 h-0.5 w-6 origin-center transform bg-card transition-transform duration-300 ease-out',
                      isActive || isHovered ? 'scale-x-100' : `scale-x-0`,
                    )}
                  />
                </>
              )}
            </NavigationMenuItem>
          );
        })}
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
