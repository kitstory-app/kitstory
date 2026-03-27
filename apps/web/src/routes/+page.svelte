<script lang="ts">
import { Button, Clamp } from "@kitstory/ui"
import { redirect } from "@sveltejs/kit"
import Meta from "$lib/components/Meta.svelte"
import type { LayoutData } from "./$types"

const { isLoggedIn }: LayoutData = $props()
</script>

<Meta title="Kitstory - organize your OCs lol" />
<div class="prose-headings:font-bold prose-h2:text-4xl">
  <header>
    <Clamp class="flex flex-col" larger>
      <div class="flex flex-col justify-center text-center mt-36 mb-20">
        <div
          class="aspect-square size-28 rounded-md bg-amber-400 mx-auto px-6 mb-8"
        >
          icon
        </div>
        <h1 class="text-6xl leading-tight">
          Write those stories like<br /> how <em>you</em> intended
        </h1>
        <p class="text-xl my-7">
          I know that sounds corny as heck, but a tool like Kitstory can do <strong
            >more</strong
          > than just writing!
        </p>
        <span class="inline-flex justify-center text-lg gap-x-4">
          <Button variant="primary" size="big" class="px-5">Get started</Button>
          <Button variant="secondary" size="big" class="px-5"
            >Tf is this?</Button
          >
        </span>
      </div>
      <!-- Cool shit here -->
      <div class="aspect-video size-full border rounded-md">
        cool infograph here
      </div>
    </Clamp>
  </header>
  <div class="space-y-20 prose-p:text-lg contents">
    <Clamp as="section" larger class="mt-60">
      <h2>Kitstory comes with tools you're already familar with</h2>
      <p>
        If you've been using tools like Trello, Notion, and your dad, all of
        those functionalities are already on KS
      </p>
    </Clamp>
    <Clamp as="section" larger>
      <h2>Combines the best of both worlds for writers and artists alike</h2>
      <p>Lol your mom</p>
    </Clamp>
    <Clamp as="section" larger>
      <h2>Visualize everything</h2>
      <p>
        No more fiddling around with messy formatting and just let Kitstory do
        things like, well, transcripts, mock chat conversations, literally
        anything!
      </p>

      <p>
        Manage character bibles, knowledge base such as wikis for characters,
        locations, and your favorite ice cream flavor
      </p>
    </Clamp>
    <Clamp as="section" larger>
      <h2>Kitstory is free... forever!</h2>
      <p>
        You heard that right cuties, it's fuckin free; it's the beauty of
        open-source software. But at the cost of being crowdfunded software tho,
        so fuk
      </p>
      <p>
        You can also self-host your own Kitstory instance, in other words, you
        can have your very own character bible, wiki, storyboards, scripts - all
        of that from your own computer.
      </p>
    </Clamp>
    <section class="px-3 text-center">
      <h2>Join the waitlist~</h2>
      <Button variant="primary" size="big" class="px-5 text-base">Join</Button>
    </section>
  </div>
</div>
