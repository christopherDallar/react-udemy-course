export const getEnvVariables = () => {
  import.meta.env // It's wear but to use env has to write twice times here and
  return {
    ...import.meta.env, // here to work
  }
}
