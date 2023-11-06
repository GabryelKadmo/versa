import { useEffect, useState } from 'react';
import { Radio, Group, Flex } from '@mantine/core';

export function TamanhoP({ onChange, productId }: any) {
  const [selectedSize, setSelectedSize] = useState(""); // Initialize selectedSize state

  const handleSizeChange = (size: any) => {
    console.log(`Selected size: ${size}`);
    setSelectedSize(size); // Update the selectedSize state
    onChange(size); // Notify the parent component about the selected size
  };

  useEffect(() => {
    // When the component is mounted, check if there's a selected size for this product in local storage
    const localStorageKey = `tamanho_${productId}`;
    const savedSize = localStorage.getItem(localStorageKey);

    if (savedSize) {
      setSelectedSize(savedSize); // Update the selectedSize state with the saved value
      // Do not call onChange(savedSize) here; it should only be called when the size changes
    }
  }, [productId]);

  return (
    <div>
      <Radio.Group name="tamanhoProduto" value={selectedSize} onChange={handleSizeChange}>
        <Group mt="xs" mb="xs">
          <Flex className="fundoP" w={55} h={30} align={"center"} justify={"center"}>
            <Radio color="dark" value="P" label="P" fw={600} />
          </Flex>
          <Flex className="fundoP" w={55} h={30} align={"center"} justify={"center"}>
            <Radio color="dark" value="M" label="M" fw={600} />
          </Flex>
          <Flex className="fundoP" w={55} h={30} align={"center"} justify={"center"}>
            <Radio color="dark" value="G" label="G" fw={600} />
          </Flex>
          <Flex className="fundoP" w={60} h={30} align={"center"} justify={"center"}>
            <Radio color="dark" value="GG" label="GG" fw={600} disabled />
          </Flex>
          <Flex className="fundoP" w={65} h={30} align={"center"} justify={"center"}>
            <Radio color="dark" value="XXL" label="XXL" fw={600} disabled />
          </Flex>
        </Group>
      </Radio.Group>
    </div>
  );
}
