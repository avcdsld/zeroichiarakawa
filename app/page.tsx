import { menuData } from '#/lib/menu-data';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="space-y-10 text-white">
      {menuData.map((section, index) => {
        return (
          <div key={index} className="space-y-2">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {section.items.map((item: any) => {
                return (
                  <Link
                    href={`/${item.slug}`}
                    key={item.name}
                    className="group block space-y-4 rounded-lg bg-gray-900 px-4 py-2 hover:bg-gray-800"
                  >
                    <div className="font-medium text-gray-200 group-hover:text-gray-50">
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
