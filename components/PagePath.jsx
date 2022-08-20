import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
const PathHooks = () => {
  const [pageTitle, setPageTitle] = useState(null);

  const titleMap = [
    { path: '/dashboard', title: 'Dashboard' },
    { path: '/dashboard/addproduct', title: 'Add Product' },
    { path: '/dashboard/manageproduct', title: 'Mange Product' },
  ];
  let curLoc = useRouter();
  useEffect(() => {
    const curTitle = titleMap.find((item) => item.path === curLoc.pathname);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = curTitle.title;
    }
  }, [curLoc]);

  return [pageTitle];
};

export default PathHooks;
