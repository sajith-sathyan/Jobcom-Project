import React, { useState } from 'react'
import SidbarStart from '../../componet/ad-sidebar-start/sidbar-start'
import MobileSidebar from '../../componet/ad-mobile-sidebar/mobileSidebar'
import NavigationStart from '../../componet/ad-nav-start/navigationStart'
import UserDetialsTable from '../../componet/ad-userDetialsTable/user-Detials-Table'

function UserDetiailsPage() {
    const [profile, setProfile] = useState(false);
  const [show, setShow] = useState(false);
  const sidebarStatus= 2
  return (
    <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
          <SidbarStart
            profile={profile}
            setProfile={setProfile}
            show={show}
            setShow={setShow}
            sidebarStatus={sidebarStatus}
          />
          <MobileSidebar
            profile={profile}
            setProfile={setProfile}
            show={show}
            setShow={setShow}
          />
          <div className="w-full">
            <NavigationStart
              profile={profile}
              setProfile={setProfile}
              show={show}
              setShow={setShow}
            />
            <UserDetialsTable />
          </div>
        </div>
      </div>
  )
}

export default UserDetiailsPage