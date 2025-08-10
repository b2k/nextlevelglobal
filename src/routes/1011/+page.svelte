<script>
  const memoryVerses = [
    { ref: "Romans 10:9–10", text: "If you confess with your mouth that Jesus is Lord ... you will be saved." },
    { ref: "Ephesians 2:8–9", text: "For by grace you have been saved through faith ..." }
  ];
</script>

<section class="space-y-6">
  <h1 class="text-4xl font-black">NL1011 • Next Level Ten</h1>
  <p class="text-lg" style="color:var(--muted)">A short, focused pathway that emphasizes the essentials: the gospel, assurance, baptism, Scripture, prayer, and community.</p>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="card">
      <h2 class="text-2xl font-bold mb-2" style="color:var(--accent)">Weekly Plan</h2>
      <ol class="list-decimal ps-6 space-y-1">
        <li>Gospel & Assurance</li>
        <li>Baptism & Testimony</li>
        <li>Prayer & Daily Habits</li>
        <li>Community & Mission</li>
      </ol>
    </div>
    <div class="card">
      <h3 class="text-xl font-semibold mb-2">Memory Verses</h3>
      <ul class="space-y-2">
        {#each memoryVerses as v}
          <li>
            <div class="font-semibold">{v.ref}</div>
            <div class="text-sm" style="color:var(--muted)">{v.text}</div>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="card">
    <h3 class="text-xl font-semibold mb-2">Join a Group</h3>
    <p class="mb-4">Ready to start? We’ll connect you with a local or online group meeting at a time that works for you.</p>
    <a class="btn btn-primary" href="/groups">Get Started</a>
  </div>
</section>
