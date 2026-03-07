<script lang="ts">
  import {
    MenuItem,
    MenuItemGroup,
    MenuHeadingGroup,
  } from "@kitstory/ui/components/menu";
  import {
    UsersRoundIcon,
    ZapIcon,
    HouseIcon,
    Clock4Icon,
    BookOpenIcon,
    PackageIcon,
    SquareKanbanIcon,
    Plug2Icon,
    LibraryBigIcon,
    TagsIcon,
    CloudOffIcon,
    ChevronRightIcon,
    LayoutTemplateIcon,
    SparklesIcon,
    BookIcon,
    ScrollTextIcon,
    MapPinIcon,
    ShapesIcon,
    ListOrderedIcon,
    ChevronsUpDownIcon,
    EllipsisIcon,
  } from "@lucide/svelte";
  import { writable } from "svelte/store";
  import { setSidebarToggle } from "@kitstory/ui/context";

  const sidebarVisible = writable(true);

  setSidebarToggle($sidebarVisible);
</script>

<aside
  style="--g-sidebar-width: 350px"
  class="h-[calc(100dvh-2.5rem)] flex relative border-r"
>
  <div id="nav-context-switcher" class="overflow-y-auto overflow-x-hidden">
    <nav
      data-root-navigation=""
      class="w-(--g-sidebar-width) px-3.5 py-3 space-y-4"
    >
      <div>
        <div
          id="project-context-switcher"
          class="mx-0.5 border mb-2.5 mt-2 rounded-md bg-neutral-950 border-neutral-700 z-10 flex justify-between py-2.5 px-2"
        >
          <div class="flex flex-1 items-center gap-x-3 text-left">
            <div class="row-span-2 size-12 rounded-md bg-red-400"></div>
            <div class="flex flex-col gap-y-1.5">
              <button class="flex items-center cursor-pointer">
                <span class="leading-none font-bold truncate text-lg"
                  >Project Name</span
                >
                <ChevronsUpDownIcon
                  size={16}
                  class="ml-1 opacity-75 inline-block align-middle"
                />
              </button>
              <div class="opacity-75 inline-flex items-center">
                <CloudOffIcon size={17} class="inline-block align-middle" />
                <span class="text-sm ml-1">Local only</span>
                <ChevronRightIcon size={16} class="inline-block align-middle" />
              </div>
            </div>
          </div>
          <button class="px-1.5 hover:bg-white/25 rounded-md">
            <EllipsisIcon size={20} />
          </button>
        </div>
        <MenuItem icon={HouseIcon}>Home</MenuItem>
        <MenuItem icon={Clock4Icon}>Recents</MenuItem>
        <MenuItem icon={ZapIcon}>Automation</MenuItem>
      </div>
      <MenuHeadingGroup label="Pinned">
        <MenuItem icon={TagsIcon}>lmao</MenuItem>
      </MenuHeadingGroup>
      <MenuHeadingGroup label="Worldbuilding">
        <MenuItem icon={TagsIcon}>Drafts</MenuItem>
        <MenuItem icon={LayoutTemplateIcon}>Mood board</MenuItem>
        <MenuItem icon={SquareKanbanIcon}>Tasks & Boards</MenuItem>
      </MenuHeadingGroup>

      <MenuHeadingGroup label="Content">
        <MenuItemGroup icon={LibraryBigIcon} label="Asset library">
          <MenuItem icon={TagsIcon}>Scripts</MenuItem>
          <MenuItem icon={TagsIcon}>Storyboards</MenuItem>
          <MenuItem icon={TagsIcon}>Media</MenuItem>
          <MenuItem icon={TagsIcon}>Audio</MenuItem>
        </MenuItemGroup>

        <MenuItem icon={ShapesIcon}>Characters</MenuItem>
        <MenuItem icon={MapPinIcon}>Locations & Mapping</MenuItem>
        <MenuItem icon={ScrollTextIcon}>Lore</MenuItem>
        <MenuItemGroup icon={BookIcon} label="Documentation">
          <MenuItem icon={BookOpenIcon}>Wikis</MenuItem>
          <MenuItem icon={SparklesIcon}>Branding</MenuItem>
          <MenuItem icon={PackageIcon}>Press Kits</MenuItem>
        </MenuItemGroup>
      </MenuHeadingGroup>
      <MenuHeadingGroup label="Admin">
        <MenuItem icon={Plug2Icon}>Integrations</MenuItem>
        <MenuItem icon={UsersRoundIcon}>Members</MenuItem>
        <MenuItem icon={ListOrderedIcon}>Audit logs</MenuItem>
      </MenuHeadingGroup>
    </nav>
  </div>

  <div
    id="resize-grip"
    class="bg-red-400 z-10 w-2 absolute inset-y-0 right-0"
  ></div>
</aside>
