import { menuData } from '#/lib/menu-data';
import { WorkCard } from '#/ui/work-card';

export default function Page() {
  return (
    <div className="space-y-10 text-white">
      {menuData.map((section, index) => {
        if (section.name !== 'Works') {
          return null;
        }
        return (
          <div key={index} className="space-y-2">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {section.items.map((item: any, index: number) => {
                return (
                  <WorkCard
                    key={item.slug + index}
                    item={item}
                    href={item.slug ? `/${item.slug}` : item.externalUrl}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
