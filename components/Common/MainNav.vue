<template>
  <header class="main-nav">
    <nav>
      <div class="main-navbar">
        <div class="left-arrow disabled" id="left-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
        <div id="mainnav">
          <ul class="nav-menu custom-scrollbar" style="display: block">
            <li class="back-btn">
              <div class="mobile-back text-end">
                <span>Back</span
                ><i class="fa fa-angle-right ps-2" aria-hidden="true"></i>
              </div>
            </li>
            <li class="sidebar-main-title">
              <div>
                <h6>General</h6>
              </div>
            </li>
            <li class="dropdown">
              <NuxtLink to="/" class="nav-link menu-title"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  ></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline></svg
                ><span>Dashboard</span>
                <div class="according-menu">
                  <i class="fa fa-angle-right"></i></div
              ></NuxtLink>
            </li>
            <li class="dropdown">
              <NuxtLink class="nav-link menu-title" to="/customers">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-mail"
                >
                  <path
                    d="M11.8 9.7c-.2-1.4-1.3-2.4-2.7-2.4H7.6c-1.3 0-2.5 1-2.7 2.4l-.5 4.2c-.1.6.4 1.1.9 1.1H6l.4 7.2c0 .5.4.9.9.9h2c.5 0 .9-.4.9-.9l.4-7.2h.8c.5 0 .9-.5.9-1l-.5-4.3zM11.1 3.8c0 1.5-1.2 2.8-2.7 2.8-1.5 0-2.7-1.2-2.7-2.8C5.6 2.3 6.8 1 8.4 1c1.5 0 2.7 1.3 2.7 2.8M19.5 16.1l-.4-3.2c-.1-1-1-1.8-2-1.8h-1.2c-1 0-1.9.8-2 1.8l-.4 3.2c0 .4.3.8.7.8h.5l.3 5.4c0 .4.3.6.7.6h1.6c.4 0 .7-.3.7-.6l.3-5.4h.6c.4 0 .7-.4.6-.8zM18.9 8c0 1.3-1 2.4-2.3 2.4-1.3 0-2.3-1.1-2.3-2.4 0-1.3 1-2.4 2.3-2.4 1.2.1 2.3 1.1 2.3 2.4"
                  />
                </svg>
                <span>Parents</span>
                <div class="according-menu">
                  <i class="fa fa-angle-down"></i></div
              ></NuxtLink>
            </li>
            <li class="dropdown">
              <NuxtLink class="nav-link menu-title" to="/drivers">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-file"
                >
                  <path
                    d="M12.5 20.9s-3-.2-4-.3c-3.3-.2-3.6-.5-4.2-4-.3-1.6-.9-6.2-.9-6.2-.2-1.4 1.8-1.7 2-.3 0 0 .6 4.4.8 5.9.3 2 .6 2.3 2.6 2.5l3.7.2c1.5.1 1.4 2.3 0 2.2zm3.2-6.1c-.3-.4-.8-.7-1.4-.7-.6-.1-1.2-.1-1.8-.2-.4 0-.8-.1-1.2-.1h-.4l-.5-2.3v-.2l.5.2c.2.1.5.2.8.2l3.6-.3c.8-.1 1.3-.8 1.3-1.5-.1-.8-.8-1.3-1.5-1.3l-3.2.3-2.8-2c-.1-.1-.2-.2-.4-.2-.3-.2-.7-.3-1.1-.2-.5.1-.8.3-1.1.7-.1.1-.2.2-.3.4-.1.3-.1.7-.1 1.1.1.6.2 1.2.4 1.8.2.8.3 1.6.5 2.4 0 0 .4 2.9.8 3.6 0 0 0 .1.1.1.4.5.8.9 1.5.9l4.7.2 2.8 4.8c.3.3.6.4 1 .4s.7-.1 1-.4c.6-.5.6-1.4.1-2-.1.1-3.3-5.7-3.3-5.7zm4.8-7.1c-.2-.2-.5-.2-.7 0l-5.1 4.7c-.2.2-.2.5 0 .7.1.1.2.2.4.2.1 0 .3 0 .4-.1l5.1-4.7c.1-.2.1-.5-.1-.8zM6.9 5.9c1.3 0 2.4-1.1 2.4-2.4C9.3 2.1 8.2 1 6.9 1S4.4 2.1 4.4 3.5c0 1.3 1.1 2.4 2.5 2.4z"
                  />
                </svg>
                <span>Chauffeur</span>
                <div class="according-menu">
                  <i class="fa fa-angle-down"></i></div
              ></NuxtLink>
            </li>
            <li class="dropdown">
              <NuxtLink class="nav-link menu-title" to="/childrens">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-file"
                >
                  <path
                    d="M19 6.2c-.5-.7-1.5-.7-2.2-.2l-3 2.6c-.2.2-.5.3-.7.3H11c-.3 0-.5-.1-.7-.3L7.3 6c-.7-.5-1.7-.4-2.3.3-.5.6-.3 1.6.3 2.1l2.8 2.4c.1.1.2.3.2.4l.6 10.5c0 .7.5 1.2 1 1.2h3.6c.5 0 1-.5 1-1.2l.5-10c0-.2.1-.3.2-.4l3.3-2.9c.8-.5 1-1.5.5-2.2z"
                  />
                  <path
                    d="M11.8 7.8c.9 0 1.7-.3 2.4-1s1-1.5 1-2.4c0-.9-.3-1.7-1-2.4s-1.5-1-2.4-1-1.8.4-2.5 1c-.7.7-1 1.5-1 2.4 0 .9.3 1.7 1 2.4s1.5 1 2.5 1z"
                  />
                </svg>
                <span>Passager</span>
                <div class="according-menu">
                  <i class="fa fa-angle-down"></i></div
              ></NuxtLink>
            </li>

            <li class="dropdown">
              <NuxtLink class="nav-link menu-title" to="/live-chat"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-message-circle"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  ></path></svg
                ><span>Chat</span>
                <div class="according-menu">
                  <i class="fa fa-angle-right"></i></div
              ></NuxtLink>
            </li>
            <li class="dropdown">
              <NuxtLink class="nav-link menu-title" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-file"
                >
                  <path
                    d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                  ></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                <span>Facturation</span>
                <div class="according-menu">
                  <i class="fa fa-angle-down"></i></div
              ></NuxtLink>
            </li>
            <li class="dropdown">
              <NuxtLink class="nav-link menu-title" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-credit-card"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                <span>Paiement</span>
                <div class="according-menu">
                  <i class="fa fa-angle-down"></i></div
              ></NuxtLink>
            </li>
          </ul>
        </div>
        <div class="right-arrow" id="right-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MainNav",
};
</script>
