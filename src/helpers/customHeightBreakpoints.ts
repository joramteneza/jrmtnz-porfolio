export function setHeightClasses(): void {
  const height = window.innerHeight;
  const body = document.querySelector("body") as HTMLElement;

  body.classList.toggle(
    "height-md",
    height >=
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--height-md"
        ) || "0"
      )
  );
  body.classList.toggle(
    "height-lg",
    height >=
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--height-lg"
        ) || "0"
      )
  );
  body.classList.toggle(
    "height-xl",
    height >=
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--height-xl"
        ) || "0"
      )
  );
}
