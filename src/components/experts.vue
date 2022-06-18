<template>
  <div>
    <div class="w-full py-20 bg-slate-900">
      <div class="max-w-screen-xl mx-auto px-5">
        <div>
          <div class="w-full">
            <p
              class="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl max-w-2xl mx-auto lg:text-center"
            >
              Backed by industry experts.
            </p>
            <div class="w-full mt-10">
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-36"
              >
                <div class="w-full">
                  <div class="w-full h-64 bg-gray-200">
                    <img
                      src="../assets/gad.jpg"
                      class="h-full w-full object-cover object-center"
                      alt=""
                    />
                  </div>
                  <div class="p-8">
                    <p class="text-lg leading-6 font-bold text-white">Gad Ocran</p>
                    <p class="text-base text-slate-200 mt-2">
                      Msc. PgDip, PgC, Digital Marketing and Digital Transformation
                    </p>
                  </div>
                  <p></p>
                </div>
                <div class="w-full">
                  <div class="w-full h-64 bg-gray-200 overflow-hidden">
                    <img
                      src="../assets/brew.jpg"
                      class="h-full w-full object-cover scale-150 object-top -translate-y-12"
                      alt=""
                    />
                  </div>
                  <div class="p-8">
                    <p class="text-lg leading-6 font-bold text-white">Dr Brew</p>
                    <p class="text-base text-slate-200 mt-2">
                      Former Head of Marketing, KTU, Lecturer, Department of Marketing,
                      University of Education, Winneaba
                    </p>
                  </div>
                  <p></p>
                </div>
                <div class="w-full">
                  <div class="w-full h-64 bg-gray-200">
                    <img
                      src="../assets/drbrew.jpg"
                      class="h-full w-full object-cover object-top"
                      alt=""
                    />
                  </div>
                  <div class="p-8">
                    <p class="text-lg leading-6 font-bold text-white">
                      Princewill Ejirika
                    </p>
                    <p class="text-base text-slate-200 mt-2">
                      Convener, Association of Digital Marketing Professionals Nigeria,
                      Ex- Ringier, Ex- Heineken etc
                    </p>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experts: [
        { name: "Gad ocran", content: "", img: "" },
        { name: "Gad ocran", content: "", img: "" },
        { name: "Gad ocran", content: "", img: "" },
      ],
    };
  },
};
</script>
