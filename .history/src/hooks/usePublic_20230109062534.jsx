import React from 'react';

export default function usePublic() {
    const { isLoading, error, data } = useQuery(["public"], async () => {
        console.log("fetching...");
        const res = await fetch("data/data.json");
        return res.json();
      });
      const clothesList =
        data &&
        data.items.filter((item) => item.type.includes(getType(temperature)));
    return (
        
    );
}

