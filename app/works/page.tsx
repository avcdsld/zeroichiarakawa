import { menuData } from '#/lib/menu-data';
import { WorkCard } from '#/ui/work-card';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-normal text-white">Works</h1>

      {menuData.map((section, index) => {
        if (section.name !== 'Works') {
          return null;
        }
        return (
          <div key={index} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {section.items.map((item: any, index: number) => {
              return (
                <WorkCard
                  key={item.slug + index}
                  item={item}
                  href={item.slug ? `/${item.slug}` : item.externalUrls[0]}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
