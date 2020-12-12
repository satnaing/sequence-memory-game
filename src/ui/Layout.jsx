import Button from "./Button";
import ColorDiv from "./ColorDiv";
import ContainerRow from "./ContainerRow";
import RoundedButton from "./RoundedButton";

const Layout = () => (
  <div className="mx-auto flex flex-col bg-bgcolor">
    {/* Header */}
    <ContainerRow>
      <h1 className="text-secondary font-gugi text-2xl sm:text-4xl mt-10">
        Press Any Key to Start
      </h1>
    </ContainerRow>

    {/* Button */}
    <ContainerRow cname="my-8">
      <ContainerRow cname="relative w-72">
        <Button cname="sm:w-24 sm:h-7 sm:text-lg">Start</Button>
        <RoundedButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              clipRule="evenodd"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </svg>
        </RoundedButton>
      </ContainerRow>
    </ContainerRow>

    {/* Up Row */}
    <ContainerRow>
      <ColorDiv color="bg-yellow" />
      <ColorDiv color="bg-red" />
    </ContainerRow>

    {/* Low Row */}
    <ContainerRow>
      <ColorDiv color="bg-blue" />
      <ColorDiv color="bg-white" />
    </ContainerRow>

    {/* High Score */}
    <ContainerRow cname="mt-5">
      <div className="text-secondary text-lg">High Score: Level 12</div>
    </ContainerRow>

    {/* Mute Btn for Mobile */}
    <ContainerRow cname="my-8">
      <Button cname="sm:invisible">
        Mute{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 m-auto inline mb-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            clipRule="evenodd"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
          />
        </svg>
      </Button>
    </ContainerRow>
  </div>
);

export default Layout;
