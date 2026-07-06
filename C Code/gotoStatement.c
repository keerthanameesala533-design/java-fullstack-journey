#include <stdio.h>
int main()
{
    int age;
start:
    printf("Enter ur age : ");
    scanf("%d", &age);
    if (age < 0)
    {
        goto start;
    }
    printf("your age is %d", age);
}
