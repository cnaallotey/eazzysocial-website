<template>
  <div></div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const faqs = ref([
      {
        que: "Are courses accredited",
        ans:
          "Most of our courses are accredited through a long-standing partnership with Short Courses, Koforidua Technical University.",
        open: "false",
      },
      {
        que: "Will I get a certificate after the course? ",
        ans:
          "Certificates awardees after the completion of each course. Certificates from Koforidua Technical University mostly attract an extra fee of GHS200",
        open: false,
      },
      {
        que: "Where are the courses held? ",
        ans:
          "Courses are held offline through our regional training centres across Ghana and Globally through live online interactive sessions. ",
        open: false,
      },
      {
        que: "Who qualifies to apply for a course? ",
        ans: "Anyone qualifies from students, workers, parents etc.",
        open: "",
      },
    
    ]);
  },
};
</script>
