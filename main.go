package main

import (
	"fmt"
	"time"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx *pulumi.Context) error {

		fmt.Println("--- STARTING UP!")

		for i := 0; i < 12; i++ {

			fmt.Println("Tick-tock-ya-dont-stop.")
			time.Sleep(5 * time.Second)

		}

		fmt.Println("--- DONE!")

		return nil
	})
}
