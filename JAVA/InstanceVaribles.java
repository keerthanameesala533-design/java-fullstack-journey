public class InstanceVaribles {
    int a = 20;
    int b = 40;

    void sum() {
        int c = a + b;
        System.out.println("Sum of a and b is: " + c);

    }

    public static void main(String[] args) {
        InstanceVaribles obj = new InstanceVaribles();
        obj.sum();
    }
}
